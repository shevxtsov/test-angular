import { createAction, props } from '@ngrx/store'

import { IArticle } from 'src/app/shared/types/article.interface'
import { IArticleRequest } from 'src/app/shared/types/articleRequest.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { ActionTypes } from '../actionTypes'

export const updateArticleAC = createAction(
    ActionTypes.UPDATE_ARTICLE,
    props<{ slug: string; articleRequest: IArticleRequest }>()
)

export const updateArticleSuccessAC = createAction(
    ActionTypes.UPDATE_ARTICLE_SUCCESS,
    props<{ article: IArticle }>()
)

export const updateArticleFailureAC = createAction(
    ActionTypes.UPDATE_ARTICLE_FAILURE,
    props<{ errors: IBackendErrors }>()
)