import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { AuthService } from '../../services/auth.service'
import { registerAC, registerFailureAC, registerSuccessAC } from '../actions/register.action'

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAC),
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: ICurrentUser) => {
                    return registerSuccessAC({ currentUser })
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(registerFailureAC({ errors: errorResponse.error.errors }))
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}
}