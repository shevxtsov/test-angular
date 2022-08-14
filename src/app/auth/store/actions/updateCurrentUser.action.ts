import { createAction, props } from '@ngrx/store'

import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { ICurrentUserRequest } from 'src/app/shared/types/currentUserRequest.interface'
import { ActionTypes } from '../actionTypes'

export const updateCurrentUserAC = createAction(
    ActionTypes.UPDATE_CURRENT_USER,
    props<{ currentUserRequest: ICurrentUserRequest }>()
)

export const updateCurrentUserSuccessAC = createAction(
    ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
)

export const updateCurrentUserFailureAC = createAction(
    ActionTypes.UPDATE_CURRENT_USER_FAILURE,
    props<{ errors: IBackendErrors }>()
)