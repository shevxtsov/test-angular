import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { environment } from 'src/environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ArticleModule } from './article/article.module'
import { AuthModule } from './auth/auth.module'
import { CreateArticleModule } from './createArticle/createArticle.module'
import { GlobalFeedModule } from './globalFeed/globalFeed.module'
import { TopBarModule } from './shared/modules/topBar/topBar.module'
import { AuthInterceptor } from './shared/services/authinterceptor.service'
import { PersistanceService } from './shared/services/persistance.service'
import { TagFeedModule } from './tagFeed/tagFeed.module'
import { YourFeedModule } from './yourFeed/yourFeed.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TopBarModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
