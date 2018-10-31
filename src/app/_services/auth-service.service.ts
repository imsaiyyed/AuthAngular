import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HomeComponent } from '../home/home.component'
import { error } from 'util';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  logInUrl:string="http://localhost:54093/token";
  username:string;
  isLoggedIn:boolean;
  constructor(private router:Router,private http: HttpClient){}  
  
  logIn(userName:string,password:string){
    var headers = new HttpHeaders();
    var body = 'username='+userName+'&password='+password+'&grant_type=password';
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
    .post(this.logInUrl,
      body, {
      headers:headers
      }).subscribe(data=>{  
        console.log(data);      
        localStorage.setItem("currentUser",JSON.stringify(data));
        this.getUserName();
        this.isLoggedIn=true;
        this.router.navigate(['/home']);
      },error=>{
        console.log(error);
        this.router.navigate(['/login']);
      })
  }

  isUserLoggedIn(){
    if(localStorage.getItem("currentUser")){
      this.router.navigate(['/home']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }



  getUserToken():string{
    if(localStorage.getItem("currentUser"))
    {
      var strToken=JSON.parse(localStorage.getItem("currentUser"));
      console.log(strToken.access_token);
      return strToken.access_token;
    }
  }

  getUserName(){
    
    this.http.get("http://localhost:54093/api/getuser").toPromise().then(data=>{
      localStorage.setItem("username",data.toString());
      console.log("Newuser");
    },error=>{
      console.log(error);
    });
  }

  isAutherised(uname:string){
      if(uname==this.username)
      {
        console.log(uname+"\n77777"+this.username);
      }
      else{
        console.log("555555555555555");
        this.router.navigate['/home'];
      }
  }
  /*getUserName1():any{
    return this.http.get("http://localhost:54093/api/getuser").toPromise().then(data=>{
      localStorage.setItem("username",data.toString
    });
     
  }*/
}
