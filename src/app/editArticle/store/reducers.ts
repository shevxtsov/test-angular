import { Action, createReducer, on } from '@ngrx/store'

import { IEditArticleState } from '../types/editArticleState.interface'
import { getArticleAC, getArticleFailureAC, getArticleSuccessAC } from './actions/getArticle.action'
import { updateArticleAC, updateArticleFailureAC, updateArticleSuccessAC } from './actions/updateArticle.action'

const initialState: IEditArticleState = {
    isLoading: false,
    article: null,
    isSubmitting: false,
    validationErrors: null
}

const editArticleReducer = createReducer(
    initialState,
    on(
        updateArticleAC,
        (state): IEditArticleState => ({
            ...state,
            isSubmitting: true
        })
    ),
    on(
        updateArticleSuccessAC,
        (state): IEditArticleState => ({
            ...state,
            isSubmitting: false
        })
    ),
    on(
        updateArticleFailureAC,
        (state, action): IEditArticleState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
    on(
        getArticleAC,
        (state): IEditArticleState => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getArticleSuccessAC,
        (state, action): IEditArticleState => ({
            ...state,
            isLoading: false,
            article: action.article
        })
    ),
    on(
        getArticleFailureAC,
        (state, action): IEditArticleState => ({
            ...state,
            isLoading: false
        })
    )
)

export function reducers(state: IEditArticleState, action: Action) {
    return editArticleReducer(state, action)
}