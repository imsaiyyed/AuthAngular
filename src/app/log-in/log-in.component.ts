import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/auth-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username:string="";
  password:string="";
  errorMessageName:string="";
  errorMessagePass:string="";

  constructor(private authService:AuthServiceService) { 

  }

  userLogIn(){
    if(this.username!="") {
      if(this.password!=""){
        this.authService.logIn(this.username,this.password);
      }
      else{
        this.errorMessagePass="Password is required";
      }
    }
    else{
      this.errorMessageName="Username is required";
    }
  }

  ngOnInit() {
  }

}
