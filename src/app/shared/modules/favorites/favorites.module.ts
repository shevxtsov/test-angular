import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'

import { FavoritesComponent } from './components/favorites/favorites.component'
import { FavoritesService } from './services/favorites.service'
import { AddToFavoritesEffect } from './store/effects/addToFavorites.effect'

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([AddToFavoritesEffect])
    ],
    declarations: [FavoritesComponent],
    exports: [FavoritesComponent],
    providers: [FavoritesService]
})
export class FavoritesModule {}