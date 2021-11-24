import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public  loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  //get current user : which is logged in.. get current user token from backend-spring..
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token..
  public generateToken(loginData: any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login user : set token in sessionStorage..
  public loginUser(token:any){
    sessionStorage.setItem("token", token);
    //this.loginStatusSubject.next(true);
    return true;
  }

  //isLogin: here we checked user is logged in or not..
  public isLoggedIn(){
    let tokenStr = sessionStorage.getItem("token");
    if(tokenStr==undefined || tokenStr =='' || tokenStr == null){
      return false;
    }
    else{
      return true;
    }
  }

  //isLogout : remove token from local storage..
  public logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    return true;
  }

  //get token..
  public getToken(){
    return sessionStorage.getItem('token');
  }

  //set userDetail..
  public setUser(user: any){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  //getUser..
  public getUser(){
    let userStr = sessionStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  // get user role - that means it's admin or normal_user..
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;      // it return single objects/user && authorities & authority from spring..
    //return user.authorities;         // it return all objects/users..
  }

}
 