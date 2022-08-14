import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { IArticle } from 'src/app/shared/types/article.interface'
import { FavoritesService } from '../../services/favorites.service'
import { AddToFavoritesAC, AddToFavoritesFailureAC, AddToFavoritesSuccessAC } from '../actions/addToFavorites.action'

@Injectable()
export class AddToFavoritesEffect {
    addToFavorites$ = createEffect(() => this.actions$.pipe(
        ofType(AddToFavoritesAC),
        switchMap(({ isFavorited, slug }) => {
            const article$ = isFavorited
                ? this.favoritesService.removeFromFavorites(slug)
                : this.favoritesService.addToFavorites(slug)

            return article$.pipe(
                map((article: IArticle) => {
                    return AddToFavoritesSuccessAC({ article })
                }),
                catchError(() => {
                    return of(AddToFavoritesFailureAC())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private favoritesService: FavoritesService,
    ) {}
}