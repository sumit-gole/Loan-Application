import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  user: any = null;  //user = null;

  constructor(
    public login: LoginService,
    //private router: Router
    ) { } 

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();

    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  //For Logout the User/Admin.. It will can remove the token & user from our browser..
  public logout(){
    this.login.logout();
    
    window.location.reload();
    //this.router.navigate(['signin']);
  }

}