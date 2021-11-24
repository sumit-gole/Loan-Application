import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // To Hide the password field..
  hide = true;
  
  // From spring boot..
  loginData = {
    username:'',
    password:''
  }
  constructor(
    private snackBar: MatSnackBar,
    private login: LoginService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    //alert("Testing purpose..");
    // For Username..
    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      this.snackBar.open('Username is required!!','',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    // For Password..
    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this.snackBar.open('Password is required!!','',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    //request to server to generate token..
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("success");
        console.log(data);

        //Login..
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            console.log(user);
            
            // redirect - if..ADMIN - then ..admin-dashboard..
            if(this.login.getUserRole() == "ADMIN")
            {
              // Redirect Admin Dashboard..             
              this.router.navigate(['admin-dashboard']);// Using this page will be redirect without reloading (its best).. 
              
              this.login.loginStatusSubject.next(true);
              //window.location.href = '/admin-dashboard';// Using this page will be reloading..
              
              this.snackBar.open("  LOGIN SUCCESSFULLY",'X', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            }

            // redirect - if..NORMAL-USER - then ..user-dashboard..
            else if(this.login.getUserRole() == "NormalUser")
            {
              // Redirect Normal User Dashboard..
              this.router.navigate(['user-dashboard']);// Using this page will be redirect without reloading (its best).. 
              
              this.login.loginStatusSubject.next(true);
              //window.location.href = '/user-dashboard';// Using this page will be reloading.. 

              this.snackBar.open("  LOGIN SUCCESSFULLY",'X', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            }
            else
            {
              // if both Admin or User both not found then we logout them.. 
              this.login.logout();
              //location.reload();  
            }
          });
      },
      (error) => {
        console.log("ERROR");
        console.log(error);
        this.snackBar.open("  INVALID CREDENTIALS!!",'X', {
          duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    );
  }

}