import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { IArticle } from 'src/app/shared/types/article.interface'
import { CreateArticleService } from '../../services/createArticle.service'
import { createArticleAC, createArticleFailureAC, createArticleSuccessAC } from '../actions/createArticle.action'

@Injectable()
export class CreateArticleEffect {
    createArticle$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleAC),
        switchMap(({ articleRequest }) => {
            return this.createArticleService.createArticle(articleRequest).pipe(
                map((article: IArticle) => {
                    return createArticleSuccessAC({ article })
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(createArticleFailureAC({ errors: errorResponse.error.errors }))
                })
            )
        })
    ))

    redirectAfterCreate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createArticleSuccessAC),
            tap(({ article }) => {
                this.router.navigate(['/articles', article.slug])
            })
        ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private createArticleService: CreateArticleService,
        private router: Router
    ) {}
}