import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { PersistanceService } from 'src/app/shared/services/persistance.service'
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
                    this.persistanseService.set('accessToken', currentUser.token)

                    return registerSuccessAC({ currentUser })
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(registerFailureAC({ errors: errorResponse.error.errors }))
                })
            )
        })
    ))

    redirectAfterSubmit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerSuccessAC),
            tap(() => {
                this.router.navigateByUrl('/')
            })
        ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanseService: PersistanceService,
        private router: Router
    ) {}
}