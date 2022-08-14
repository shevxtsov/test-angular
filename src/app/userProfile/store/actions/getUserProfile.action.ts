import { createAction, props } from '@ngrx/store'

import { IProfile } from 'src/app/shared/types/profile.interface'
import { Actiontypes } from '../actionTypes'

export const getUserProfileAC = createAction(
    Actiontypes.GET_USER_PROFILE,
    props<{ slug: string }>()
)

export const getUserProfileSuccessAC = createAction(
    Actiontypes.GET_USER_PROFILE_SUCCESS,
    props<{ userProfile: IProfile }>()
)

export const getUserProfileFailureAC = createAction(
    Actiontypes.GET_USER_PROFILE_FAILURE
)