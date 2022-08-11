import { createAction, props } from '@ngrx/store'

import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { ILoginRequest } from '../../types/loginRequest.interface'
import { ActionTypes } from '../actionTypes'

export const loginAC = createAction(
    ActionTypes.LOGIN,
    props<{ request: ILoginRequest }>()
)

export const loginSuccessAC = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
)

export const loginFailureAC = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: IBackendErrors }>()
)