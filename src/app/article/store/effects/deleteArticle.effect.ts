import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { ArticleService } from '../../services/article.service'
import { deleteArticleAC, deleteArticleFailureAC, deleteArticleSuccessAC } from '../actions/deleteArticle.action'

@Injectable()
export class DeleteArticleEffect {
    deleteArticle$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticleAC),
        switchMap(({ slug }) => {
            return this.articleService.deleteArticle(slug).pipe(
                map(() => {
                    return deleteArticleSuccessAC()
                }),
                catchError(() => {
                    return of(deleteArticleFailureAC())
                })
            )
        })
    ))

    redirectAfterDelete$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticleSuccessAC),
        tap(() => {
            this.router.navigate(['/'])
        })),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) {}
}