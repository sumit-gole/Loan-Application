import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // For Logout the system..
  user: any = null;  //user = null;

  constructor(public login: LoginService) { }

  ngOnInit(): void {
  }

  //For Logout the User/Admin.. It will can remove the token & user from our browser..
  public logout(){
    this.login.logout();
    
    window.location.reload();
    //this.router.navigate(['signin']);
  }

}
