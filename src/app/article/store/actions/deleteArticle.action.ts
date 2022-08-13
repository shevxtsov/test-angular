import { createAction, props } from '@ngrx/store'

import { ActionTypes } from '../actionTypes'

export const deleteArticleAC = createAction(
    ActionTypes.DELETE_ARTICLE,
    props<{ slug: string }>()
)

export const deleteArticleSuccessAC = createAction(
    ActionTypes.DELETE_ARTICLE_SUCCESS,
)

export const deleteArticleFailureAC = createAction(
    ActionTypes.DELETE_ARTICLE_FAILURE
)