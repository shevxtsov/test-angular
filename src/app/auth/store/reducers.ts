import { Action, createReducer, on } from '@ngrx/store'

import { IAuthState } from '../types/authState.interface'
import { getCurrentUserAC, getCurrentUserFailureAC, getCurrentUserSuccessAC } from './actions/getCurrentUser.action'
import { loginAC, loginFailureAC, loginSuccessAC } from './actions/login.action'
import { registerAC, registerFailureAC, registerSuccessAC } from './actions/register.action'

const initialState: IAuthState = {
    isSubmitting: false,
    isLoading: false,
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
    })),
    on(loginAC, (state): IAuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(loginSuccessAC, (state, action): IAuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(loginFailureAC, (state, action): IAuthState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
    on(getCurrentUserAC, (state): IAuthState => ({
        ...state,
        isLoading: true,
        validationErrors: null
    })),
    on(getCurrentUserSuccessAC, (state, action): IAuthState => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(getCurrentUserFailureAC, (state): IAuthState => ({
        ...state,
        isLoading: false,
        validationErrors: null,
        isLoggedIn: false,
        currentUser: null
    }))
)

export function reducers(state: IAuthState, action: Action) {
    return authReducer(state, action)
}