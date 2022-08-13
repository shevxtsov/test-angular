import { Action, createReducer, on } from '@ngrx/store'

import { ICreateArticleState } from '../types/createArticleState.interface'
import { createArticleAC, createArticleFailureAC, createArticleSuccessAC } from './actions/createArticle.action'

const initialState: ICreateArticleState = {
    isSubmitting: false,
    validationErrors: null
}

const createArticleReducer = createReducer(
    initialState,
    on(
        createArticleAC,
        (state): ICreateArticleState => ({
            ...state,
            isSubmitting: true
        })
    ),
    on(
        createArticleSuccessAC,
        (state): ICreateArticleState => ({
            ...state,
            isSubmitting: false
        })
    ),
    on(
        createArticleFailureAC,
        (state, action): ICreateArticleState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    )
)

export function reducers(state: ICreateArticleState, action: Action) {
    return createArticleReducer(state, action)
}