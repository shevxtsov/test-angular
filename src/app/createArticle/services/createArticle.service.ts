import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { IArticle } from 'src/app/shared/types/article.interface'
import { IArticleRequest } from 'src/app/shared/types/articleRequest.interface'
import { ISaveArticleResponse } from 'src/app/shared/types/saveArticleResponse.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class CreateArticleService {
    constructor(private http: HttpClient) {}

    createArticle(articleRequest: IArticleRequest): Observable<IArticle>{
        const fullUrl = environment.apiUrl + '/articles'

        return this.http
            .post<ISaveArticleResponse>(fullUrl, { article: articleRequest })
            .pipe(map((response: ISaveArticleResponse) => response.article))
    }
}