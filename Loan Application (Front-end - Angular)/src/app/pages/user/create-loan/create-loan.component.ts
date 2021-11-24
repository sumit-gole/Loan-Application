//import { LoginService } from 'src/app/services/login.service';
//import { ApplyLoanPopupComponent } from './../popup/apply-loan-popup/apply-loan-popup.component';
//import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Loan } from 'src/app/models/loan';
import { HardcodedAuthenticationService } from 'src/app/services/HardcodedAuthentication/hardcoded-authentication.service';
import { LoanService } from 'src/app/services/loan-service/loan.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {

  // to get user id from localStorage..
  //user: any=null;

  @ViewChild('alert', { static: true }) alert: ElementRef;
  loanForm: FormGroup | any;
  customerId: string;
  loan: Loan = new Loan();
  submitted = false;
  today = new Date();
  range: number;
  date: Date;
  paymentSchedule: number = 0;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment(this.now).format('YYYY-MM-DD');
  maxDate= moment(this.now, "YYYY-MM-DD").format('YYYY-MM-DD');

  constructor(
    private formBuilder: FormBuilder, 
    private loanService: LoanService, 
    //private router: Router,
    private authService:HardcodedAuthenticationService,
    public dialog: MatDialog,
    //private login: LoginService,
    private snackBar: MatSnackBar,
  ) { }

  
  ngOnInit() {
    this.customerId=this.authService.getCustomerId();
    this.loanForm = this.formBuilder.group({
      customerId: [{ value:this.customerId, disabled: true }],
      loanAmount: ['', [Validators.required, Validators.max(10000000), Validators.min(1000)]],
      tradeDate: ['',Validators.required],
      startDate: ['',Validators.required],
      loanDuration: ['',Validators.required],
      maturityDate: [{ value: new Date(), disabled: true }],
      interestRate: [{ value: 10, disabled: true }],
      paymentFrequency: ['', [Validators.required]],
      paymentSchedule: [{ value: 0, disabled: true }],
      paymentTerm: ['', [Validators.required]],
      projectedInterest: [{ value: 0, disabled: true }],
    });

    // Using this we request data from our browser localStorage (get current user detail from localStorage)
    //this.user=this.login.getUser();
  }


  get f() { return this.loanForm.controls; }


  setMaturityDate(event:any) {
    var range = (event.target.value) * 12;
    var startDate = this.loanForm.get('startDate').value;
    var date = new Date(startDate);
    if (range != 0) {
      this.loanForm.patchValue({
        maturityDate: new Date(date.setMonth(date.getMonth() + range)).toISOString().substring(0, 10)
      });
    }
  }


  calculatepaymentSchedule(event:any) {
    var totalMonths = parseInt(this.loanForm.get('loanDuration').value) * 12;
    if (event.target.value == "Monthly") {
      this.paymentSchedule = totalMonths;
    } else if (event.target.value == "Quarterly") {
      this.paymentSchedule = totalMonths / 3;
    } else if (event.target.value == "Half Yearly") {
      this.paymentSchedule = totalMonths / 6;
    } else if (event.target.value == "Yearly") {
        this.paymentSchedule = totalMonths / 12;
    }
    this.loanForm.patchValue({
      paymentSchedule: this.paymentSchedule
    });
  }
  

  calculateprojectedInterest(event:any) {
    var value = event.target.value;
    var principal = this.loanForm.get('loanAmount').value;
    var totalYears = this.loanForm.get('loanDuration').value;
    var interestRate = this.loanForm.get('interestRate').value;
    var paymentSchedule = this.loanForm.get('paymentSchedule').value;

    if (value != undefined) {
      var interestAmount:number|any = 0;
      var perPaymentPrincipal=(principal / paymentSchedule);
      for (var i = 1; i <= paymentSchedule; i++) {
        interestAmount = interestAmount + (principal * (totalYears / paymentSchedule) * interestRate) / 100;
        principal = principal - perPaymentPrincipal;
      }
    }
    this.loanForm.patchValue({
      projectedInterest: interestAmount
    });
  }


  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  
  onSubmit() {
    this.submitted = true;
    if (this.loanForm.invalid) {
      return;
    }
    this.loan.customerId = this.loanForm.get('customerId').value;
    this.loan.loanAmount = this.loanForm.get('loanAmount').value;
    this.loan.tradeDate = this.formatDate(this.loanForm.get('tradeDate').value);
    this.loan.startDate = this.formatDate(this.loanForm.get('startDate').value);
    this.loan.loanDuration = this.loanForm.get('loanDuration').value;
    this.loan.maturityDate = this.formatDate(this.loanForm.get('maturityDate').value);
    this.loan.interestRate = this.loanForm.get('interestRate').value;
    this.loan.paymentFrequency = this.loanForm.get('paymentFrequency').value;
    this.loan.paymentSchedule = this.loanForm.get('paymentSchedule').value;
    this.loan.paymentTerm = this.loanForm.get('paymentTerm').value;
    this.loan.projectedInterest = this.loanForm.get('projectedInterest').value;

    this.loanService.saveLoan(this.loan).subscribe(data => {
      console.log('Save Loan:' + data);
    });

    this.snackBar.open("  Loan has been Successgully Applied!!",'X', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
    //this.dialog.open( ApplyLoanPopupComponent );
    this.resetForm();
  }
   
  
  async resetForm(){
    this.loanForm.reset();
    Object.keys(this.loanForm.controls).forEach(key => {
      this.loanForm.controls[key].setErrors(null)
    });
    this.submitted=false;
    // await this.router.navigate(['home'])
  }

  formatDate(input:string) {
    var datePart = input.match(/\d+/g),
    year = datePart![0],
    month = datePart![1],
    day = datePart![2];
    return day+'-'+month+'-'+year;
  }

}
