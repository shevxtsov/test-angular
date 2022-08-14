import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { IProfile } from 'src/app/shared/types/profile.interface'
import { UserProfileService } from '../../services/userProfile.service'
import { getUserProfileAC, getUserProfileFailureAC, getUserProfileSuccessAC } from '../actions/getUserProfile.action'

@Injectable()
export class GetUserProfileEffect {
    getUserProfile$ = createEffect(() => this.actions$.pipe(
        ofType(getUserProfileAC),
        switchMap(({ slug }) => {
            return this.userProfileService.getUserProfile(slug).pipe(
                map((userProfile: IProfile) => {
                    return getUserProfileSuccessAC({ userProfile })
                }),
                catchError(() => {
                    return of(getUserProfileFailureAC())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private userProfileService: UserProfileService,
    ) {}
}