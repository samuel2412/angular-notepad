import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import * as fromApp from '../store/app.reducer'
import * as AuthActions from '../auth/store/auth.actions'
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isCollapsed:boolean = false;
  storeSub: Subscription
  isAuthenticated: boolean
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch( new AuthActions.AutoLogin() )
    this.storeSub = this.store.select('auth').pipe(
      map(authState => authState.user)
    ).subscribe(user => {
      this.isAuthenticated = !!user
    })
  }
  ngOnDestroy(){
    this.storeSub.unsubscribe()
  }

  onCollapse () {
    this.isCollapsed = !this.isCollapsed
  }

  onLogout(){
    this.store.dispatch( new AuthActions.Logout() )
  }

}
