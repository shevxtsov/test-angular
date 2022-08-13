import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { IAppState } from 'src/app/shared/types/appState.interface'
import { IArticleRequest } from 'src/app/shared/types/articleRequest.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'
import { createArticleAC } from '../../store/actions/createArticle.action'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'

@Component({
    selector: 'mc-create-article',
    templateUrl: './createArticle.component.html',
    styleUrls: ['./createArticle.component.scss']
})
export class CreateArticleComponent implements OnInit {
    initialValues: IArticleRequest = {
        title: '',
        description: '',
        body: '',
        tagList: []
    }
    isSubmitting$: Observable<boolean>
    backendErrors$: Observable<IBackendErrors | null>

    constructor(private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    onSubmit(articleRequest: IArticleRequest): void {
        this.store.dispatch(createArticleAC({ articleRequest }))
    }
}