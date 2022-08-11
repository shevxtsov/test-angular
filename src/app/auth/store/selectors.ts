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