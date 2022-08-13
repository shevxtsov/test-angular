import { Action, createReducer, on } from '@ngrx/store'

import { IArticleState } from '../types/articleState.interface'
import { getArticleAC, getArticleFailureAC, getArticleSuccessAC } from './actions/getArticle.action'

const initialState: IArticleState = {
    isLoading: false,
    error: null,
    data: null
}

const articleReducer = createReducer(
    initialState,
    on(
        getArticleAC,
        (state): IArticleState => ({
            ...state,
            isLoading: true,
            data: null,
            error: null
        })
    ),
    on(
        getArticleSuccessAC,
        (state, action): IArticleState => ({
            ...state,
            isLoading: false,
            data: action.article
        })
    ),
    on(
        getArticleFailureAC,
        (state): IArticleState => ({
            ...state,
            isLoading: false,
            error: 'SERVER ERROR'
        })
    )
)

export function reducers(state: IArticleState, action: Action) {
    return articleReducer(state, action)
}