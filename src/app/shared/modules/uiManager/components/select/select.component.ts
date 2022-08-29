import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'mc-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
    @Input('id') idProps: string
    @Input('label') labelProps: string
    @Input('items') itemsProps: string[]

    @Output('onChange') onChangeEvent = new EventEmitter()

    ngOnInit(): void {
        
    }

    onChange($event: any): void {
        this.onChangeEvent.emit({
            id: this.idProps,
            value: $event.target.value
        })
    }
}