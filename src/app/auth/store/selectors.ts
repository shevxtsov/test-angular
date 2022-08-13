import { createSelector } from '@ngrx/store'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { IAuthState } from '../types/authState.interface'

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.validationErrors
)

export const isLoggedInSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isLoggedIn
)

export const isAnonymousSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isLoggedIn === false
)

export const currentUserSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.currentUser
)

export const isLoadingSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isLoading
)