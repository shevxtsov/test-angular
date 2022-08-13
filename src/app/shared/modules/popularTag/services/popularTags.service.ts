import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { TPopularTag } from 'src/app/shared/types/popularTag.type'
import { environment } from 'src/environments/environment'
import { IPopularTagResponse } from '../types/popularTagResponse.interface'

@Injectable()
export class PopularTagService {
    constructor(private http: HttpClient) {}

    getPopularTags(): Observable<TPopularTag[]> {
        const url = environment.apiUrl + '/tags'

        return this.http
            .get<IPopularTagResponse>(url)
            .pipe(map((response: IPopularTagResponse) => response.tags))
    }
}