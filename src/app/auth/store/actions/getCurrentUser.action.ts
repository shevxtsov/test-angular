import { createAction, props } from '@ngrx/store'

import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { ActionTypes } from '../actionTypes'

export const getCurrentUserAC = createAction(
    ActionTypes.GET_CURRENT_USER
)

export const getCurrentUserSuccessAC = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
)

export const getCurrentUserFailureAC = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE
)