import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service'
import { IArticle } from 'src/app/shared/types/article.interface'
import { getArticleAC, getArticleFailureAC, getArticleSuccessAC } from '../actions/getArticle.action'

@Injectable()
export class GetArticleEffect {
    getArticle$ = createEffect(() => this.actions$.pipe(
        ofType(getArticleAC),
        switchMap(({ slug }) => {
            return this.sharedArticleService.getArticle(slug).pipe(
                map((article: IArticle) => {
                    return getArticleSuccessAC({ article })
                }),
                catchError(() => {
                    return of(getArticleFailureAC())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private sharedArticleService: SharedArticleService,
    ) {}
}