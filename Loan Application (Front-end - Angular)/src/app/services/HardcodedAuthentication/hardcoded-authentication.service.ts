import { Injectable } from '@angular/core';
import { LoginService } from './../login.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  // to get user id from localStorage..
  //user: any;

  constructor(private login: LoginService) {}
  
  getCustomerId(): string {
    // to get user id from localStorage..
    return this.login.getUser().idLong;
    
    //return this.user?.idLong;
    //return this.customer?.customerId;
  }

}


