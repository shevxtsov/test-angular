import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'mc-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input('id') idProps: string
    @Input('label') labelProps: string
    @Input('event') eventProps: string

    @Output('onClick') onClickEvent = new EventEmitter()

    ngOnInit(): void {
        
    }

    onClick(): void {
        this.onClickEvent.emit({
            id: this.idProps,
            evt: this.eventProps
        })
    }
}