import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IAppState } from 'src/app/shared/types/appState.interface'

import { registerAC } from '../../store/actions/register.action'
import { isSubmittingSelector } from '../../store/selectors'
import { IRegisterRequest } from '../../types/registerRequest.interface'

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup
    isSubmitting$: Observable<boolean>

    constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: '',
            password: ''
        })
    
    }

    onSubmit(): void {
        const request: IRegisterRequest = {
            user: this.form.value
        }
        
        this.store.dispatch(registerAC({ request }))
    }
}