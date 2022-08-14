import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { AuthService } from '../../services/auth.service'
import { updateCurrentUserAC, updateCurrentUserFailureAC, updateCurrentUserSuccessAC } from '../actions/updateCurrentUser.action'

@Injectable()
export class UpdateCurrentUserEffect {
    updateCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(updateCurrentUserAC),
        switchMap(({ currentUserRequest }) => {
            return this.authService.updateCurrentUser(currentUserRequest).pipe(
                map((currentUser: ICurrentUser) => {
                    return updateCurrentUserSuccessAC({ currentUser })
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(updateCurrentUserFailureAC({ errors: errorResponse.error.errors }))
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) {}
}