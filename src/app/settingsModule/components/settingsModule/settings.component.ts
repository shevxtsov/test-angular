import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { filter, Observable, Subscription } from 'rxjs'

import { logoutAC } from 'src/app/auth/store/actions/sync.action'
import { updateCurrentUserAC } from 'src/app/auth/store/actions/updateCurrentUser.action'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { ICurrentUserRequest } from 'src/app/shared/types/currentUserRequest.interface'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'

@Component({
    selector: 'mc-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
    currentUser: ICurrentUser
    currentUserSubscription: Subscription
    form: FormGroup
    isSubmitting$: Observable<boolean>
    backendErrors$: Observable<IBackendErrors | null>

    constructor(
        private fb: FormBuilder,
        private store: Store<IAppState>
    ) {}

    ngOnInit(): void {
        this.initializeListeners()
        this.initializeValues()
    }

    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe()
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    initializeListeners(): void {
        this.currentUserSubscription = this.store
            .pipe(select(currentUserSelector), filter(Boolean))
            .subscribe((currentUser: ICurrentUser) => {
                this.currentUser = currentUser
                this.initializeForm()
            })
    }

    initializeForm(): void {
        this.form = this.fb.group({
            image: this.currentUser.image,
            username: this.currentUser.username,
            bio: this.currentUser.bio,
            email: this.currentUser.email,
            password: ''
        })
    }

    onSubmit(): void {
        const currentUserRequest: ICurrentUserRequest = {
            ...this.currentUser,
            ...this.form.value
        }

        this.store.dispatch(updateCurrentUserAC({ currentUserRequest }))
    }

    logout(): void {
        this.store.dispatch(logoutAC())
    }
}