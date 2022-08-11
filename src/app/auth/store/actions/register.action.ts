import { createAction, props } from '@ngrx/store'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

import { IRegisterRequest } from '../../types/registerRequest.interface'
import { ActionTypes } from '../actionTypes'

export const registerAC = createAction(
    ActionTypes.REGISTER,
    props<{ request: IRegisterRequest }>()
)

export const registerSuccessAC = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
)

export const registerFailureAC = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: IBackendErrors }>()
)