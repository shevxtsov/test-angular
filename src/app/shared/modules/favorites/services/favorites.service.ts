import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { IArticle } from 'src/app/shared/types/article.interface'
import { IGetArticleResponse } from 'src/app/shared/types/getArticleResponse.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class FavoritesService {
    constructor(private http: HttpClient) {}

    addToFavorites(slug: string): Observable<IArticle> {
        const url = this.getUrl(slug)

        return this.http.post(url, {}).pipe(map(this.getArticle))
    }

    removeFromFavorites(slug: string): Observable<IArticle> {
        const url = this.getUrl(slug)

        return this.http.delete(url).pipe(map(this.getArticle))
    }

    getUrl(slug: string): string {
        return `${environment.apiUrl}/articles/${slug}/favorite`
    }

    getArticle(response: IGetArticleResponse): IArticle {
        return response.article
    }
}