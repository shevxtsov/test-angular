import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { IMeta } from 'src/app/shared/types/meta.inteface'

@Component({
    selector: 'mc-page-builder',
    templateUrl: './pageBuilder.component.html',
    styleUrls: ['./pageBuilder.component.scss']
})
export class PageBuilderComponent implements OnInit {
    @Input('meta') metaProps: IMeta

    @Output('onInput') onInputEvent = new EventEmitter()
    @Output('onClick') onClickEvent = new EventEmitter()
    @Output('onChange') onChangeEvent = new EventEmitter()

    constructor() {}

    ngOnInit(): void {
    }
}