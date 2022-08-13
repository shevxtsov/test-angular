import { createSelector } from '@ngrx/store'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { IPopularTagState } from '../types/popularTagState.interface'

export const popularTagsFeatureSelector = (state: IAppState) => state.popularTags

export const popularTagSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: IPopularTagState) => popularTagsState.data
)

export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: IPopularTagState) => popularTagsState.isLoading
)

export const errorSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: IPopularTagState) => popularTagsState.error
)