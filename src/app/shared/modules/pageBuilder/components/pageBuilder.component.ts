import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IEvent } from 'src/app/shared/types/event.interface'

import { IMeta } from 'src/app/shared/types/meta.inteface'

@Component({
    selector: 'mc-page-builder',
    templateUrl: './pageBuilder.component.html',
    styleUrls: ['./pageBuilder.component.scss']
})
export class PageBuilderComponent implements OnInit {
    @Input('meta') metaProps: IMeta

    @Output('onInput') onInputEvent = new EventEmitter<IEvent>()
    @Output('onClick') onClickEvent = new EventEmitter<IEvent>()
    @Output('onChange') onChangeEvent = new EventEmitter<IEvent>()

    constructor() {}

    ngOnInit(): void {
    }
}