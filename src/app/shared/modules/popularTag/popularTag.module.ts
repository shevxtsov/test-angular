import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ErrorMessageModule } from '../errorMessage/errorMessage.module'
import { LoadingModule } from '../loading/loading.module'
import { PopularTagComponent } from './components/popularTag.component'
import { PopularTagService } from './services/popularTags.service'
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect'
import { reducers } from './store/reducers'

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('popularTags', reducers),
        EffectsModule.forFeature([GetPopularTagsEffect]),
        LoadingModule,
        ErrorMessageModule,
        RouterModule
    ],
    declarations: [PopularTagComponent],
    exports: [PopularTagComponent],
    providers: [PopularTagService]
})
export class PopularTagModule {}