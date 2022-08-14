import { createAction } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'

export const logoutAC = createAction(
    ActionTypes.LOGOUT
)