import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service'


@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  uname:string;

  constructor(private router:ActivatedRoute,private authService:AuthServiceService) {
    this.router.params.subscribe(params => {this.uname=params['uname']});
    this.authService.isAutherised(this.uname);
    console.log("here");

   }

  ngOnInit() {
 
  }

}
