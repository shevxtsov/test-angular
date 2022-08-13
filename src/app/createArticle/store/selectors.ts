import { createSelector } from '@ngrx/store'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { ICreateArticleState } from '../types/createArticleState.interface'

export const createArticleFeatureSelector = (state: IAppState): ICreateArticleState => state.createArticle

export const isSubmittingSelector = createSelector(
    createArticleFeatureSelector,
    (createArticle: ICreateArticleState) => createArticle.isSubmitting
)

export const validationErrorsSelector = createSelector(
    createArticleFeatureSelector,
    (createArticle: ICreateArticleState) => createArticle.validationErrors
)