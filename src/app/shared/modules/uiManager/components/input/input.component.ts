import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { IEvent } from 'src/app/shared/types/event.interface'

@Component({
    selector: 'mc-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Input('id') idProps: string
    @Input('label') labelProps: string

    @Output('onInput') onInputEvent = new EventEmitter<IEvent>()

    ngOnInit(): void {

    }

    onInput(event: any) {
        this.onInputEvent.emit({
            value: event.target.value
        })
    }
}