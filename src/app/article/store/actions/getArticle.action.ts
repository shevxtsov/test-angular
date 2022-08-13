import { createAction, props } from '@ngrx/store'

import { IArticle } from 'src/app/shared/types/article.interface'
import { ActionTypes } from '../actionTypes'

export const getArticleAC = createAction(
    ActionTypes.GET_ARTICLE,
    props<{ slug: string }>()
)

export const getArticleSuccessAC = createAction(
    ActionTypes.GET_ARTICLE_SUCCESS,
    props<{ article: IArticle }>()
)

export const getArticleFailureAC = createAction(
    ActionTypes.GET_ARTICLE_FAILURE
)