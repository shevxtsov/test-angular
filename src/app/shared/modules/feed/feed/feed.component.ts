import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { parseUrl, stringify } from 'query-string'
import { Observable, Subscription } from 'rxjs'

import { environment } from 'src/environments/environment'
import { getFeedAC } from '../store/actions/getFeed.action'
import { errorSelector, feedSelector, isLoadingSelector } from '../store/selectors'
import { IFeedResponse } from '../types/feedResponse.interface'

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
    @Input('apiUrl') apiUrlProps: string

    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    feed$: Observable<IFeedResponse>
    limit: number = environment.limit
    baseUrl: string
    queryParamsSubscription: Subscription
    currentPage: number

    constructor(
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initializeValues()
        this.initializaListeners()
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe()
    }

    ngOnChanges(changes: SimpleChanges): void {
        const isApiUrlChanged = !changes['apiUrlProps'].firstChange && changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue
        
        if (isApiUrlChanged) {
            this.fetchFeed()
        }
    }

    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.feed$ = this.store.pipe(select(feedSelector))
        this.baseUrl = this.router.url.split('?')[0]
    }
    
    initializaListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe(
            (params: Params) => {
                this.currentPage = Number(params['page'] || '1')
                this.fetchFeed()
            }
        )
    }
    
    fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit
        const parsedUrl = parseUrl(this.apiUrlProps)
        const stringifiedParams = stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`

        this.store.dispatch(getFeedAC({ url: apiUrlWithParams}))
    }
}