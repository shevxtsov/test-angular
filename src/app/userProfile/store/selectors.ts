import { createSelector } from '@ngrx/store'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { IUserProfileState } from '../types/userProfileState.interface'

export const userProfileFeatureSelector = (state: IAppState): IUserProfileState => state.userProfile

export const isLoadingSelector = createSelector(
    userProfileFeatureSelector,
    (userProfileState: IUserProfileState) => userProfileState.isLoading
)

export const userProfileSelector = createSelector(
    userProfileFeatureSelector,
    (userProfileState: IUserProfileState) => userProfileState.data
)

export const errorSelector = createSelector(
    userProfileFeatureSelector,
    (userProfileState: IUserProfileState) => userProfileState.error
)