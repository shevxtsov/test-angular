import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FeddTogglerComponent } from './components/feedToggler.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [FeddTogglerComponent],
    exports: [FeddTogglerComponent]
})
export class FeedTogglerModule {}