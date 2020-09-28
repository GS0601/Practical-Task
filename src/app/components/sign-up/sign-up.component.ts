import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user = {
    username : '',
    email : '',
    password : ''
  };

  public successMsg;
  public emptyForm;
  public errorMsg;
  constructor(private _userService:UserService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  //submitRegister
  public submitRegister(){
    if(this.user.username !== '' && this.user.email !== '' && this.user.password !== ''){
        this._router.navigate( ['/sign-in']);
      console.log(this.user);
      alertify
  .alert("registered successfully.", function(){});
    }
    else{
      alertify
  .alert("please enter your details.", function(){});
      
      this.emptyForm = true;
    }
  }

}

