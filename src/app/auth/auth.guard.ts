import { CanActivate, Router } from '@angular/router'
import { Injectable } from '@angular/core'


@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

  constructor(private router: Router){}

  canActivate( ): boolean {
    const currentUser = JSON.parse(localStorage.getItem('userData'));
    if (currentUser && currentUser._token) {
      return true
    } else {
      this.router.navigateByUrl('login')
      return false
    }
  }

}
