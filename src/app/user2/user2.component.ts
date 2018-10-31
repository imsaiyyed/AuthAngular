import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/auth-service.service'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  uname:string;

  constructor(private router:ActivatedRoute,private authService:AuthServiceService) { 
    console.log("here");

  }

  ngOnInit() {
    this.router.params.subscribe(params => {this.uname=params['uname']});
     this.authService.isAutherised(this.uname);
  }

}
