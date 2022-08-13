import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { getCurrentUserAC } from './auth/store/actions/getCurrentUser.action'
import { IAppState } from './shared/types/appState.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAC())
  }
}
