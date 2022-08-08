import { createAction, props } from '@ngrx/store'

import { RegisterRequestI } from '../../types/registerRequest.interface'
import { ActionTypes } from '../actionTypes'

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<RegisterRequestI>()
)