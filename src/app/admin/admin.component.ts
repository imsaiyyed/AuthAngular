import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service';
import { delay } from 'q';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  uname:string;
  constructor(private router:ActivatedRoute,private authService:AuthServiceService) {
    console.log("here");
   }

  ngOnInit() {
    this.router.params.subscribe(params => {this.uname=params['uname']});
    this.authService.isAutherised(this.uname);
    }

   

}
