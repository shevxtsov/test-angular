import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { TPopularTag } from 'src/app/shared/types/popularTag.type'
import { PopularTagService } from '../../services/popularTags.service'
import { getPopularTagsAC, getPopularTagsFailureAC, getPopularTagsSuccessAC } from '../actions/getPopularTag.action'

@Injectable()
export class GetPopularTagsEffect {
    getPopularTags$ = createEffect(() => this.actions$.pipe(
        ofType(getPopularTagsAC),
        switchMap(() => {
            return this.popularTagService.getPopularTags().pipe(
                map((tags: TPopularTag[]) => {
                    return getPopularTagsSuccessAC({ tags })
                }),
                catchError(() => {
                    return of(getPopularTagsFailureAC())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private popularTagService: PopularTagService,
    ) {}
}