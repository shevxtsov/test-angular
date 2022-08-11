import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { loginAC } from '../../store/actions/login.action'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'
import { ILoginRequest } from '../../types/loginRequest.interface'

@Component({
    selector: 'mc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup
    isSubmitting$: Observable<boolean>
    backendErrors$: Observable<IBackendErrors | null>

    constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    initializeForm(): void {
        this.form = this.fb.group({
            email: '',
            password: ''
        })
    
    }

    onSubmit(): void {
        const request: ILoginRequest = {
            user: this.form.value
        }

        this.store.dispatch(loginAC({ request }))
    }
}