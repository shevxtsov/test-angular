import { IProfile } from 'src/app/shared/types/profile.interface'

export interface IUserProfileState {
    data: IProfile
    isLoading: boolean
    error: string | null
}