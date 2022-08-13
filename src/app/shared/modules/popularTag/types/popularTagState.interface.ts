import { TPopularTag } from 'src/app/shared/types/popularTag.type'

export interface IPopularTagState {
    isLoading: boolean,
    error: string | null,
    data: TPopularTag[] | null
}