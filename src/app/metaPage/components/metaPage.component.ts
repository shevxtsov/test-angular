import { Component, OnInit } from '@angular/core'
import { IMeta } from 'src/app/shared/types/meta.inteface'
import { testMeta } from 'src/assets/metadata/test.meta'

@Component({
    selector: 'ms-meta-page',
    templateUrl: './metaPage.component.html',
    styleUrls: ['./metaPage.component.scss']
})
export class MetaPageComponent implements OnInit {
    meta: IMeta = testMeta

    constructor() {}

    ngOnInit(): void {
    }

    onInput($event: any) {
        console.log($event)
    }

    onClick($event: any) {
        console.log($event)
    }

    onChange($event: any) {
        console.log($event)
    }
}