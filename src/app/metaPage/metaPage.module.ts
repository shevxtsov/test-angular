import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageBuilderModule } from '../shared/modules/pageBuilder/pageBuilder.module'

import { UIManagerModule } from '../shared/modules/uiManager/uiManager.module'
import { MetaPageComponent } from './components/metaPage.component'

const routes: Routes = [
    {
        path: 'test',
        component: MetaPageComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        UIManagerModule,
        RouterModule.forChild(routes),
        PageBuilderModule
    ],
    declarations: [MetaPageComponent],
})
export class MetaPageModule {}