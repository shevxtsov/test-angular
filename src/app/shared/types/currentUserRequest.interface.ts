import { ICurrentUser } from './currentUser.interface'

export interface ICurrentUserRequest extends ICurrentUser {
    password: string
}