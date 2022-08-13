import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { currentUserSelector, isAnonymousSelector, isLoadingSelector, isLoggedInSelector } from 'src/app/auth/store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

@Component({
    selector: 'mc-topbar',
    templateUrl: './topBar.component.html',
    styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit {
    isLoggedIn$: Observable<boolean>
    isAnonymous$: Observable<boolean>
    currentUser$: Observable<ICurrentUser | null>
    isLoading$: Observable<boolean>

    constructor(private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
        this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
        this.currentUser$ = this.store.pipe(select(currentUserSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    }
}