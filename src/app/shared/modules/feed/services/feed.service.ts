import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

import { IFeedResponse } from '../types/feedResponse.interface'

@Injectable()
export class FeedService {
    constructor(private http: HttpClient) {}

    getFeed(url: string): Observable<IFeedResponse> {
        const fullUrl = environment.apiUrl + url 

        return this.http.get<IFeedResponse>(fullUrl)
    }
}