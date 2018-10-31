import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  {
      path:'login',
      component:LogInComponent
  },
  {
    path:'home',
    component:HomeComponent
},
  {
      path:'home/user1/:uname',
      component:User1Component
  },
  {
    path:'home/user2/:uname',
    component:User2Component
  },
  {
    path:'home/admin/:uname',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
