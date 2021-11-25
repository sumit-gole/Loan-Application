import { Injectable } from '@angular/core';
import { LoginService } from './../login.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  // to get user id from sessionStorage..
  //user: any;

  constructor(private login: LoginService) {}
  
  getCustomerId(): string {
    // to get user id from sessionStorage..
    return this.login.getUser().userId;
    
    //return this.user?.userId;
    //return this.customer?.customerId;
  }

}


