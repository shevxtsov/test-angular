import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'

export interface ICreateArticleState {
    isSubmitting: boolean
    validationErrors: IBackendErrors | null
}