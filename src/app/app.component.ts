import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthServiceService } from './_services/auth-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userPage:string="";
  constructor(private authService:AuthServiceService,private route: ActivatedRoute,private router:Router){
    this.route.params.subscribe(params => {
      this.userPage=params['uname'];
    });
    if(this.userPage=="")
    {
      console.log("71041");
      authService.isUserLoggedIn();
    }
    else if(this.userPage){
      console.log("444444");

    }
    else{
      console.log("3333333333333333");
      router.navigate['/login'];
    }
  }
  title = 'AuthenticationAngular';
}
