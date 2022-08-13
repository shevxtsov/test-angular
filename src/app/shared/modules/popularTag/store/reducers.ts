import { Action, createReducer, on } from '@ngrx/store'

import { IPopularTagState } from '../types/popularTagState.interface'
import { getPopularTagsAC, getPopularTagsSuccessAC } from './actions/getPopularTag.action'

const initialState: IPopularTagState = {
    isLoading: false,
    error: null,
    data: null
}

const popularTagsReducer = createReducer(
    initialState,
    on(
        getPopularTagsAC,
        (state): IPopularTagState => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getPopularTagsSuccessAC,
        (state, action): IPopularTagState => ({
            ...state,
            isLoading: false,
            data: action.tags
        })
    ),
    on(
        getPopularTagsAC,
        (state): IPopularTagState => ({
            ...state,
            isLoading: false,
            data: null
        })
    )
)

export function reducers(state: IPopularTagState, action: Action) {
    return popularTagsReducer(state, action)
}