import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { FeedService } from '../../services/feed.service'
import { IFeedResponse } from '../../types/feedResponse.interface'
import { getFeedAC, getFeedFailureAC, getFeedSuccessAC } from '../actions/getFeed.action'

@Injectable()
export class GetFeedEffect {
    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAC),
        switchMap(({ url }) => {
            return this.feedService.getFeed(url).pipe(
                map((feed: IFeedResponse) => {
                    return getFeedSuccessAC({ feed })
                }),
                catchError(() => {
                    return of(getFeedFailureAC())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private feedService: FeedService,
    ) {}
}