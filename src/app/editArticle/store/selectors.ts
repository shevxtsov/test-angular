import { createSelector } from '@ngrx/store'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { IEditArticleState } from '../types/editArticleState.interface'

export const editArticleFeatureSelector = (state: IAppState): IEditArticleState => state.editArticle

export const isSubmittingSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: IEditArticleState) => editArticleState.isSubmitting
)

export const isLoadingSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: IEditArticleState) => editArticleState.isLoading
)

export const validationErrorsSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: IEditArticleState) => editArticleState.validationErrors
)

export const articleSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: IEditArticleState) => editArticleState.article
)