import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup
  email: string
  password: string
  isLogin: boolean = true

  constructor(private router: Router, ) { }

  ngOnInit(): void {
    this.isLogin = this.router.url === '/login'
    this.form = new FormGroup({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(){
    console.log(this.form)
  }

  onSwitchMode(){
    if(this.isLogin){
      this.router.navigateByUrl('signup')
    } else {
      this.router.navigateByUrl('login')
    }
  }

}