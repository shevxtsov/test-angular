import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { tap } from 'rxjs'

import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { logoutAC } from '../actions/sync.action'

@Injectable()
export class LogoutEffect {
    logout$ = createEffect(
        () => 
        this.actions$.pipe(
            ofType(logoutAC),
            tap(() => {
                this.persistanseService.set('accessToken', '')
                this.router.navigateByUrl('/')
            })
        ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private persistanseService: PersistanceService,
        private router: Router
    ) {}
}