import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { TPopularTag } from 'src/app/shared/types/popularTag.type'
import { getPopularTagsAC } from '../store/actions/getPopularTag.action'
import { errorSelector, isLoadingSelector, popularTagSelector } from '../store/selectors'

@Component({
    selector: 'mc-popular-tag',
    templateUrl: './popularTag.component.html',
    styleUrls: ['./popularTag.component.scss']
})
export class PopularTagComponent implements OnInit {
    popularTags$: Observable<TPopularTag[]>
    isLoading$: Observable<boolean>
    error$: Observable<string | null>

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.inititalizeValues()
        this.fetchData()
    }

    inititalizeValues(): void {
        this.popularTags$ = this.store.pipe(select(popularTagSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
    }

    fetchData(): void {
        this.store.dispatch(getPopularTagsAC())  
    }
}