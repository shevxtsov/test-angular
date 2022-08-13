import { IArticleState } from 'src/app/article/types/articleState.interface'
import { IAuthState } from 'src/app/auth/types/authState.interface'
import { IFeedState } from '../modules/feed/types/feedState.interface'
import { IPopularTagState } from '../modules/popularTag/types/popularTagState.interface'

export interface IAppState {
    auth: IAuthState,
    feed: IFeedState,
    popularTags: IPopularTagState,
    article: IArticleState
}