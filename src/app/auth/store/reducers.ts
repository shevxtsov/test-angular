import { Action, createReducer, on } from '@ngrx/store'
import { AuthStateI } from '../types/authState.interface'
import { registerAction } from './actions/register.action'

const initialState: AuthStateI = {
    isSubmitting: false
}

const authReducer = createReducer(
    initialState,
    on(registerAction, (state): AuthStateI => ({
        ...state,
        isSubmitting: true
    }))
)

export function reducers(state: AuthStateI, action: Action) {
    return authReducer(state, action)
}