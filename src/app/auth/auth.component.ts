import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from './store/auth.actions'
import * as fromAPp from '../store/app.reducer'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  form: FormGroup
  email: string
  password: string
  isLogin: boolean = true
  private storeSub: Subscription
  isLoading: boolean
  error: string = null;

  constructor(private store: Store<fromAPp.AppState> ) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading
      this.error = authState.authError
    })
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnDestroy(){
    this.storeSub.unsubscribe()
  }

  onSubmit(){
    const {email, password} = this.form.value
    if(this.isLogin){
      this.store.dispatch( new AuthActions.LoginStart({email,password}) )
    } else {
      this.store.dispatch( new AuthActions.SignupStart({email,password}) )
    }
  }

  onSwitchMode(){
    this.isLogin = !this.isLogin
  }

}