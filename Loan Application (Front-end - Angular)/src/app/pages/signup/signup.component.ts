import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';


import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // To Hide the password field..
  hide = true;

  submitted = false;

  user={
    name:'',
    accno:'',
    address:'',
    phone:'',
    username:'',
    email:'',
    password:'',
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private snakeBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {}


  // To submit the sign-up form..
  formSubmit(){
    this.submitted = true;

    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      //alert('User is required..!!');
      this.snakeBar.open('Username is required!!',  '', {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    //validation


    // calling addUser function from user.service.ts file..
    this.userService.addUser(this.user)
    .subscribe((data) => {
      //success
      console.log(data);
      //alert("Success");
      Swal.fire('Success', 'User is registered','success');
      //Swal.fire('Success Done !!', 'User id is ' + data.id + ' success');
      this.router.navigate(['signin']);
    },
    (error) => {
      //error
      console.log(error);
      //alert("Something went wrong!!");
      this.snakeBar.open('Something went wrong!!','',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    })
  }

}
