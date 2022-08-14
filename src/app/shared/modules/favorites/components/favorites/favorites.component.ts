import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { AddToFavoritesAC } from '../../store/actions/addToFavorites.action'

@Component({
    selector: 'mc-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    @Input('isFavorited') isFavoritedProps: boolean
    @Input('articleSlug') articleSlugProps: string
    @Input('favoritesCount') favoritesCountProps: number

    favoritesCount: number
    isFavorited: boolean

    constructor(private store: Store<IAppState>) {}
    
    ngOnInit(): void {
        this.favoritesCount = this.favoritesCountProps
        this.isFavorited = this.isFavoritedProps
    }
    
    handleClick(): void {
        this.store.dispatch(AddToFavoritesAC({
            slug: this.articleSlugProps,
            isFavorited: this.isFavorited
        }))
        
        if (this.isFavorited) {
            this.favoritesCount = this.favoritesCount - 1
        } else {
            this.favoritesCount = this.favoritesCount + 1
        }

        this.isFavorited = !this.isFavorited
    }
}