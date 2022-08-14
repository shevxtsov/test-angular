import { createAction, props } from '@ngrx/store'

import { IArticle } from 'src/app/shared/types/article.interface'
import { ActionTypes } from '../actionTypes'

export const AddToFavoritesAC = createAction(
    ActionTypes.ADD_TO_FAVORITES,
    props<{ isFavorited: boolean; slug: string }>()
)

export const AddToFavoritesSuccessAC = createAction(
    ActionTypes.ADD_TO_FAVORITES_SUCCESS,
    props<{ article: IArticle }>()
)

export const AddToFavoritesFailureAC = createAction(
    ActionTypes.ADD_TO_FAVORITES_FAILURE
)