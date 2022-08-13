import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LoadingModule } from '../loading/loading.module'
import { TopBarComponent } from './components/topBar.component'


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoadingModule
    ],
    declarations: [TopBarComponent],
    exports: [TopBarComponent]
})
export class TopBarModule {}