import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any=null;

  constructor(private login: LoginService) { }

  ngOnInit(): void {

    // Using this we request data from our browser localStorage (get current user detail from localStorage)
    this.user=this.login.getUser();

    // Using this we request data from our database server..
    /*this.login.getCurrentUser().subscribe(
      (user: any) => {
        this.user = user;
      }, 
      (error) => {
        alert("Error Occurred!!");
      }
    );*/
  }

}
