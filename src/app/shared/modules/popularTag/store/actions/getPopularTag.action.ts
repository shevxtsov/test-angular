import { createAction, props } from '@ngrx/store'

import { TPopularTag } from 'src/app/shared/types/popularTag.type'
import { ActionTypes } from '../actionsTypes'

export const getPopularTagsAC = createAction(
    ActionTypes.GET_POPULAR_TAGS
)

export const getPopularTagsSuccessAC = createAction(
    ActionTypes.GET_POPULAR_TAGS_SUCCESS,
    props<{ tags: TPopularTag[] }>()
)

export const getPopularTagsFailureAC = createAction(
    ActionTypes.GET_POPULAR_TAGS_FAILURE
)