import { Component, Input, OnInit } from '@angular/core'

import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'

@Component({
    selector: 'mc-backend-error-messages',
    templateUrl: './backendErrorMessages.component.html',
    styleUrls: ['./backendErrorMessages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
    @Input('errors') backendErrorProps: IBackendErrors

    errors: string[]

    ngOnInit(): void {
        this.errors = Object.keys(this.backendErrorProps).map((name: string) => {
            const messages = this.backendErrorProps[name].join(', ')

            return `${name} ${messages}`
        })
    }
}