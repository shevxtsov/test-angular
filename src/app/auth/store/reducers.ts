import { Action, createReducer, on } from '@ngrx/store'
import { IAuthState } from '../types/authState.interface'
import { registerAC, registerFailureAC, registerSuccessAC } from './actions/register.action'

const initialState: IAuthState = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
}

const authReducer = createReducer(
    initialState,
    on(registerAC, (state): IAuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerSuccessAC, (state, action): IAuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(registerFailureAC, (state, action): IAuthState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    }))
)

export function reducers(state: IAuthState, action: Action) {
    return authReducer(state, action)
}