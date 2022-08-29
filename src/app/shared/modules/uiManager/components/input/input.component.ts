import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'mc-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Input('id') idProps: string
    @Input('label') labelProps: string

    @Output('onInput') onInputEvent = new EventEmitter()

    ngOnInit(): void {

    }

    onInput(event: any) {
        this.onInputEvent.emit(event.target.value)
    }
}