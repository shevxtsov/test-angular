import { createAction, props } from '@ngrx/store'

import { IArticle } from 'src/app/shared/types/article.interface'
import { IArticleRequest } from 'src/app/shared/types/articleRequest.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { ActionTypes } from '../actionTypes'

export const createArticleAC = createAction(
    ActionTypes.CREATE_ARTICLE,
    props<{ articleRequest: IArticleRequest }>()
)

export const createArticleSuccessAC = createAction(
    ActionTypes.CREATE_ARTICLE_SUCCESS,
    props<{ article: IArticle }>()
)

export const createArticleFailureAC = createAction(
    ActionTypes.CREATE_ARTICLE_FAILURE,
    props<{ errors: IBackendErrors }>()
)