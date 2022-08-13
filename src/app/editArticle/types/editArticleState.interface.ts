import { IArticle } from 'src/app/shared/types/article.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'

export interface IEditArticleState {
    isLoading: boolean
    article: IArticle | null
    isSubmitting: boolean
    validationErrors: IBackendErrors | null
}