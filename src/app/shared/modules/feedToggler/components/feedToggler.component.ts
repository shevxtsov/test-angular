import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { isLoggedInSelector } from 'src/app/auth/store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'

@Component({
    selector: 'mc-feed-toggler',
    templateUrl: './feedToggler.component.html',
    styleUrls: ['./feedToggler.component.scss']
})
export class FeddTogglerComponent implements OnInit {
    @Input('tagName') tagNameProps: string | null

    isLoggedIn$: Observable<boolean>

    constructor(private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.initializeValues()
    }

    initializeValues(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    }
}