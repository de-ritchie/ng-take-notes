import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  loginStatus: BehaviorSubject<boolean>;

  constructor(public router: Router){

    this.loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  }

  getLogginStatus(): BehaviorSubject<boolean> {
    return this.loginStatus;
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    let status = this.isLoggedIn();
    if(!status){
      this.router.navigate(['login']);
    }
    this.loginStatus.next(status);
    return status;
  }
}