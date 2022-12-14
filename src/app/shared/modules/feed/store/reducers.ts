import { Action, createReducer, on } from '@ngrx/store'

import { IFeedState } from '../types/feedState.interface'
import { getFeedAC, getFeedFailureAC, getFeedSuccessAC } from './actions/getFeed.action'

const initialState: IFeedState = {
    isLoading: false,
    error: null,
    data: null
}

const feedReducer = createReducer(
    initialState,
    on(
        getFeedAC,
        (state): IFeedState => ({
            ...state,
            isLoading: true,
            data: null,
            error: null
        })
    ),
    on(
        getFeedSuccessAC,
        (state, action): IFeedState => ({
            ...state,
            isLoading: false,
            data: action.feed
        })
    ),
    on(
        getFeedFailureAC,
        (state): IFeedState => ({
            ...state,
            isLoading: false,
            error: 'SERVER ERROR'
        })
    )
)

export function reducers(state: IFeedState, action: Action) {
    return feedReducer(state, action)
}