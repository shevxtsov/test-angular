import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { combineLatest, map, Observable, Subscription } from 'rxjs'

import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { IArticle } from 'src/app/shared/types/article.interface'
import { getArticleAC } from '../store/actions/getArticle.action'
import { articleSelector, errorSelector, isLoadingSelector } from '../store/selectors'

@Component({
    selector: 'mc-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
    slug: string
    article: IArticle | null
    articleSubscription: Subscription
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    isAuthor$: Observable<boolean>

    constructor(
        private store: Store<IAppState>,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
        this.fetchData()
    }

    ngOnDestroy(): void {
        this.articleSubscription.unsubscribe()
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug')
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isAuthor$ = combineLatest([
            this.store.pipe(select(articleSelector)),
            this.store.pipe(select(currentUserSelector))
        ]).pipe(
            map(
                ([article, currentUser]: [
                    IArticle | null, ICurrentUser | null
                ]) => {
                    if (!article || !currentUser) {
                        return false
                    }

                    return currentUser.username === article.author.username
                }
            )
        )
    }

    initializeListeners(): void {
        this.articleSubscription = this.store
            .pipe(select(articleSelector))
            .subscribe((article: IArticle | null) => {
                this.article = article
            })
    }

    fetchData(): void {
        this.store.dispatch(getArticleAC({ slug: this.slug }))
    }
}
