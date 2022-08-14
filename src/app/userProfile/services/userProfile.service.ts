import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { IProfile } from 'src/app/shared/types/profile.interface'
import { environment } from 'src/environments/environment'
import { IUserProfileResponse } from '../types/userProfileResponse.interface'

@Injectable()
export class UserProfileService {
    constructor(private http: HttpClient) {}

    getUserProfile(slug: string): Observable<IProfile> {
        const url = `${environment.apiUrl}/profiles/${slug}`

        return this.http
            .get(url)
            .pipe(map((response: IUserProfileResponse) => response.profile))
    }
}