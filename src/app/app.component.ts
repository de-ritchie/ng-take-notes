import { Component, OnInit } from '@angular/core';

import { AuthGuardService } from './shared/services/auth-guard.service';

interface Route{
  route: string,
  value: string
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  status: boolean;
  guest: Route[];
  authorized: Route[];
  routes: Route[];

  constructor(private authGuardService: AuthGuardService){
    this.guest = [
      {
        route: "/login",
        value: " Login/SignUp "
      }
    ];
    this.authorized = [
      {
        route: "/notes",
        value: " Notes "
      },
      {
        route: "/notebooks",
        value: " Notebooks "
      }
    ];
  }

  ngOnInit(){
    this.authGuardService.getLogginStatus()
    .subscribe(
      (val) => {
        console.log("====>", val);
        if(this.status === val){
          return;
        }
        if(val){
          this.routes = this.authorized;
        } else{
          this.routes = this.guest;
        }
        this.status = val;
      }
    )
  }

}
