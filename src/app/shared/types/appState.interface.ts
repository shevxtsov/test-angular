import { IArticleState } from 'src/app/article/types/articleState.interface'
import { IAuthState } from 'src/app/auth/types/authState.interface'
import { ICreateArticleState } from 'src/app/createArticle/types/createArticleState.interface'
import { IEditArticleState } from 'src/app/editArticle/types/editArticleState.interface'
import { ISettingsState } from 'src/app/settingsModule/types/settingState.interface'
import { IUserProfileState } from 'src/app/userProfile/types/userProfileState.interface'
import { IFeedState } from '../modules/feed/types/feedState.interface'
import { IPopularTagState } from '../modules/popularTag/types/popularTagState.interface'

export interface IAppState {
    auth: IAuthState,
    feed: IFeedState,
    popularTags: IPopularTagState,
    article: IArticleState,
    createArticle: ICreateArticleState,
    editArticle: IEditArticleState,
    settings: ISettingsState,
    userProfile: IUserProfileState
}