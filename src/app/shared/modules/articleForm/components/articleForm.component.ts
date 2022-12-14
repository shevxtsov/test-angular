import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { IArticleRequest } from 'src/app/shared/types/articleRequest.interface'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'

@Component({
    selector: 'mc-article-form',
    templateUrl: './articleForm.component.html',
    styleUrls: ['./articleForm.component.scss']
})
export class ArticleFormComponent implements OnInit {
    @Input('initialValues') initialValuesProps: IArticleRequest
    @Input('isSubmitting') isSubmittingProps: boolean
    @Input('errors') errorsProps: IBackendErrors | null

    @Output('articleSubmit') articleSubmitEvent = new EventEmitter<IArticleRequest>()

    form: FormGroup

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm(): void {
        this.form = this.fb.group({
            title: this.initialValuesProps.title,
            description: this.initialValuesProps.description,
            body: this.initialValuesProps.body,
            tagList: this.initialValuesProps.tagList.join(' ')
        })
    }

    onSubmit(): void {
        const articleRequest: IArticleRequest = {
            ...this.form.value,
            tagList: this.form.value.tagList.split(', ')
        }
        this.articleSubmitEvent.emit(articleRequest)
    }
}