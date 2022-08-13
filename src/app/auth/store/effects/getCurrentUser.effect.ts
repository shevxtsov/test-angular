import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { AuthService } from '../../services/auth.service'
import { getCurrentUserAC, getCurrentUserFailureAC, getCurrentUserSuccessAC } from '../actions/getCurrentUser.action'

@Injectable()
export class GetCurrentUserEffect {
    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(getCurrentUserAC),
        switchMap(() => {
            const token = this.persistanseService.get('accessToken')

            if (!token) {
                return of(getCurrentUserFailureAC())
            }

            return this.authService.getCurrentUser().pipe(
                map((currentUser: ICurrentUser) => {
                    return getCurrentUserSuccessAC({ currentUser })
                }),
                catchError(() => {
                    return of(getCurrentUserFailureAC())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanseService: PersistanceService,
    ) {}
}