import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs'

import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { IProfile } from 'src/app/shared/types/profile.interface'
import { getUserProfileAC } from '../../store/actions/getUserProfile.action'
import { errorSelector, isLoadingSelector, userProfileSelector } from '../../store/selectors'

@Component({
    selector: 'mc-user-profile',
    templateUrl: './userProfile.component.html',
    styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
    userProfile: IProfile
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    userProfileSubscription: Subscription
    slug: string
    apiUrl: string
    isCurrentUser$: Observable<boolean>

    constructor(
        private store: Store<IAppState>,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
    }

    ngOnDestroy(): void {
        this.userProfileSubscription.unsubscribe()
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug')
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isCurrentUser$ = combineLatest([
            this.store.pipe(select(currentUserSelector), filter(Boolean)),
            this.store.pipe(select(userProfileSelector), filter(Boolean))
        ]).pipe(
            map(([curentUser, userProfle]: [ICurrentUser, IProfile]) => {
                return curentUser.username === userProfle.username
            })
        )
    }

    initializeListeners(): void {
        this.userProfileSubscription = this.store
            .pipe(select(userProfileSelector))
            .subscribe((userProfile: IProfile) => {
                this.userProfile = userProfile
            })

        this.route.params.subscribe((params: Params) => {
            this.slug = params['slug']
            this.fetchUserProfile()
        })
    }

    getApiUrl(): string {
        const isFavorites = this.router.url.includes('favorites')

        return this.apiUrl = isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`
    }

    fetchUserProfile(): void {
        this.store.dispatch(getUserProfileAC({ slug: this.slug }))
    }
}