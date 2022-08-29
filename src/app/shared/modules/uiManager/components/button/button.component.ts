import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IEvent } from "src/app/shared/types/event.interface";

@Component({
    selector: 'mc-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input('id') idProps: string
    @Input('label') labelProps: string
    @Input('event') eventProps: string

    @Output('onClick') onClickEvent = new EventEmitter<IEvent>()

    ngOnInit(): void {
        
    }

    onClick(): void {
        this.onClickEvent.emit({
            id: this.idProps,
            evt: this.eventProps
        })
    }
}