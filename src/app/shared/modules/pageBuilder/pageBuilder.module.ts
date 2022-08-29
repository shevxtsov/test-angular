import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { UIManagerModule } from '../uiManager/uiManager.module'
import { PageBuilderComponent } from './components/pageBuilder.component'

@NgModule({
    imports: [
        CommonModule,
        UIManagerModule,
    ],
    declarations: [PageBuilderComponent],
    exports: [PageBuilderComponent]
})
export class PageBuilderModule {}