import { Component, Input } from '@angular/core'

import { TPopularTag } from 'src/app/shared/types/popularTag.type'

@Component({
    selector: 'mc-tag-list',
    templateUrl: './tagList.component.html',
    styleUrls: ['./tagList.component.scss']
})
export class TagListComponent {
    @Input('tags') tagsProps: TPopularTag[]
}