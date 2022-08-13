import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { getFeedAC } from '../store/actions/getFeed.action'
import { errorSelector, feedSelector, isLoadingSelector } from '../store/selectors'
import { IFeedResponse } from '../types/feedResponse.interface'

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    @Input('apiUrl') apiUrlProps: string

    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    feed$: Observable<IFeedResponse>

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues()
        this.fetchData()
    }

    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.feed$ = this.store.pipe(select(feedSelector))
    }
    
    fetchData(): void {
        this.store.dispatch(getFeedAC({ url: this.apiUrlProps}))
    }
}