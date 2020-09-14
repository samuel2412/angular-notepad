import { Action } from '@ngrx/store'

export const SIGNUP_START = '[Auth] Signup Start'
export const LOGIN_START = '[Auth] Login Start'
export const AUTHENTICATE_SUCCESS = '[Auth] Login'
export const AUTHENTICATE_FAIL = '[Auth] Login Fail'

export class SignupStart implements Action {
  readonly type = SIGNUP_START
  constructor(public payload: { email: string, password: string }){}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START
  constructor(public payload: { email: string, password: string }){}
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS
  constructor(public payload: { email: string, userId: string, token: string, expirationDate: Date,redirect: boolean }){}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL
  constructor(public payload: string){}
}

export type AuthActions =
| SignupStart
| LoginStart
| AuthenticateSuccess
| AuthenticateFail