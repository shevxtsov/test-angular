import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BannerModule } from '../shared/modules/banner/banner.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagModule } from '../shared/modules/popularTag/popularTag.module'
import { GlobalFeedComponent } from './globalFeed/globalFeed.component'

const routes: Routes = [
    {
        path: '',
        component: GlobalFeedComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagModule
    ],
    declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule {}