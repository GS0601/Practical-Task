import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user = {
    email : '',
    password : ''
  };

   public successMsg;
  public errorMsg;
  public emptyForm;
  constructor(private _userService:UserService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  //submitLogin
  public submitLogin(){
    console.log(this.submitLogin);
    if(this.user.email !== '' && this.user.password !== ''){
    this._router.navigate( ['/employee']);
      console.log(this.user);
      alertify
  .alert("sign in successfully.", function(){});
  this._router.navigate(['/employee']);
    }
    else{
      alertify
  .alert("please enter username & password.");
      this.emptyForm = true;
    }
  }




}

