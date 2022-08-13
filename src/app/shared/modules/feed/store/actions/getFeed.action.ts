import { createAction, props } from '@ngrx/store'

import { IFeedResponse } from '../../types/feedResponse.interface'
import { ActionTypes } from '../actionTypes'

export const getFeedAC = createAction(
    ActionTypes.GET_FEED,
    props<{ url: string }>()
)

export const getFeedSuccessAC = createAction(
    ActionTypes.GET_FEED_SUCCESS,
    props<{ feed: IFeedResponse }>()
)

export const getFeedFailureAC = createAction(
    ActionTypes.GET_FEED_FAILURE
)