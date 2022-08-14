import { Action, createReducer, on } from '@ngrx/store'

import { updateCurrentUserAC, updateCurrentUserFailureAC, updateCurrentUserSuccessAC } from 'src/app/auth/store/actions/updateCurrentUser.action'
import { ISettingsState } from '../types/settingState.interface'

const initialState: ISettingsState = {
    isSubmitting: false,
    validationErrors: null
}

const settingsReducer = createReducer(
    initialState,
    on(updateCurrentUserAC, (state): ISettingsState => ({
        ...state,
        isSubmitting: true
    })),
    on(updateCurrentUserSuccessAC, (state): ISettingsState => ({
        ...state,
        isSubmitting: false
    })),
    on(updateCurrentUserFailureAC, (state, action): ISettingsState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    }))
)

export function reducers(state: ISettingsState, action: Action) {
    return settingsReducer(state, action)
}