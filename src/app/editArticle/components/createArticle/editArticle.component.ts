import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { filter, map, Observable } from 'rxjs'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { IArticle } from 'src/app/shared/types/article.interface'
import { IArticleRequest } from 'src/app/shared/types/articleRequest.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { getArticleAC } from '../../store/actions/getArticle.action'
import { updateArticleAC } from '../../store/actions/updateArticle.action'
import { articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'

@Component({
    selector: 'mc-edit-article',
    templateUrl: './editArticle.component.html',
    styleUrls: ['./editArticle.component.scss']
})
export class EditArticleComponent implements OnInit {
    initialValues$: Observable<IArticleRequest>
    isSubmitting$: Observable<boolean>
    isLoading$: Observable<boolean>
    backendErrors$: Observable<IBackendErrors | null>
    slug: string

    constructor(
        private store: Store<IAppState>,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initializeValues()
        this.fetchData()
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug')
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
        this.initialValues$ = this.store.pipe(
            select(articleSelector),
            filter(Boolean),
            map((article: IArticle) => {
                return {
                    title: article.title,
                    description: article.description,
                    body: article.body,
                    tagList: article.tagList
                }
            }
        ))
    }

    fetchData(): void {
        this.store.dispatch(getArticleAC({ slug: this.slug }))
    }

    onSubmit(articleRequest: IArticleRequest): void {
        this.store.dispatch(updateArticleAC({ slug: this.slug, articleRequest }))
    }
}