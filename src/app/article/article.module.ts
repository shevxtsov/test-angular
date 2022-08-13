import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { TagListModule } from '../shared/modules/tagList/tagList.module'
import { ArticleService as SharedArticleService} from '../shared/services/article.service'
import { ArticleComponent } from './article/article.component'
import { ArticleService } from './services/article.service'
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { reducers } from './store/reducers'

const routes: Routes = [
    {
        path: 'articles/:slug',
        component: ArticleComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
        StoreModule.forFeature('article', reducers),
        RouterModule.forChild(routes),
        ErrorMessageModule,
        LoadingModule,
        TagListModule
    ],
    declarations: [ArticleComponent],
    providers: [SharedArticleService, ArticleService]
})
export class ArticleModule {}