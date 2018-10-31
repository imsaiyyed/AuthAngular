import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/auth-service.service'
import { delay } from 'q';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:string;
  constructor(private authService:AuthServiceService) { 
    console.log("001");
    authService.getUserToken();
  }


  ngOnInit() {
    this.userName=localStorage.getItem("username");
    this.getName();
    console.log(this.userName);

  }

  async getName(){
    await delay(3000);
    this.userName=localStorage.getItem("username");
    this.authService.username=localStorage.getItem("username");
  }

  userLogOut(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("username");
    this.authService.isUserLoggedIn();
  }

}
