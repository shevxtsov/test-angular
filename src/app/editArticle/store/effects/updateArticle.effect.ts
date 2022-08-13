import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { IArticle } from 'src/app/shared/types/article.interface'
import { EditArticleService } from '../../services/editArticle.service'
import { updateArticleAC, updateArticleFailureAC, updateArticleSuccessAC } from '../actions/updateArticle.action'

@Injectable()
export class UpdateArticleEffect {
    updateArticle$ = createEffect(() => this.actions$.pipe(
        ofType(updateArticleAC),
        switchMap(({ slug, articleRequest }) => {
            return this.editArticleService.updateArticle(slug, articleRequest).pipe(
                map((article: IArticle) => {
                    return updateArticleSuccessAC({ article })
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(updateArticleFailureAC({ errors: errorResponse.error.errors }))
                })
            )
        })
    ))

    redirectAfterCreate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateArticleSuccessAC),
            tap(({ article }) => {
                this.router.navigate(['/articles', article.slug])
            })
        ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private editArticleService: EditArticleService,
        private router: Router
    ) {}
}