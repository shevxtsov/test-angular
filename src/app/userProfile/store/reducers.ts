import { Action, createReducer, on } from '@ngrx/store'

import { IUserProfileState } from '../types/userProfileState.interface'
import { getUserProfileAC, getUserProfileFailureAC, getUserProfileSuccessAC } from './actions/getUserProfile.action'

const initialState: IUserProfileState = {
    isLoading: false,
    error: null,
    data: null
}

const userProfileReducer = createReducer(
    initialState,
    on(
        getUserProfileAC,
        (state): IUserProfileState => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getUserProfileSuccessAC,
        (state, action): IUserProfileState => ({
            ...state,
            isLoading: false,
            data: action.userProfile
        })
    ),
    on(
        getUserProfileFailureAC,
        (state): IUserProfileState => ({
            ...state,
            isLoading: false
        })
    )
)

export function reducers(state: IUserProfileState, action: Action) {
    return userProfileReducer(state, action)
}