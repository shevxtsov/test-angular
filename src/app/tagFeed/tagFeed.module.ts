import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BannerModule } from '../shared/modules/banner/banner.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module'
import { PopularTagModule } from '../shared/modules/popularTag/popularTag.module'
import { TagFeedComponent } from './components/tagFeed.component'

const routes: Routes = [
    {
        path: 'tags/:slug',
        component: TagFeedComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagModule,
        FeedTogglerModule
    ],
    declarations: [TagFeedComponent]
})
export class TagFeedModule {}