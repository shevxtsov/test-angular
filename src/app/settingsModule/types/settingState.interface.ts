import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'

export interface ISettingsState {
    isSubmitting: boolean
    validationErrors: IBackendErrors | null
}