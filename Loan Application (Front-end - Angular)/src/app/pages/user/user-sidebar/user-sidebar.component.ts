import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  // For Logout the system..
  user: any = null;  //user = null;

  constructor(public login: LoginService) { }

  ngOnInit(): void {}

  //For Logout the User/Admin.. It will can remove the token & user from our browser..
  public logout(){
    this.login.logout();
    
    window.location.reload();
    //this.router.navigate(['signin']);
  }

}
