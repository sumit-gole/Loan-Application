import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { HardcodedAuthenticationService } from 'src/app/services/HardcodedAuthentication/hardcoded-authentication.service';
import { LoanService } from 'src/app/services/loan-service/loan.service';

@Component({
  selector: 'app-display-loan',
  templateUrl: './display-loan.component.html',
  styleUrls: ['./display-loan.component.css']
})
export class DisplayLoanComponent implements OnInit {

  loans: Loan[];
  customerId: string;
  spin : boolean;

  constructor(
    private router: Router,
    private loanService: LoanService,
    private authService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {
    this.customerId=this.authService.getCustomerId();
    this.spin=true;
    this.loanService.getLoanList(this.customerId).subscribe((data:any) =>{
      this.spin=false;
      this.loans =data;
    });
  }
  
  navigatePaymentSchedule(loanId: string){
    this.router.navigate([`./payment-schedule`],{ queryParams: { loanId: loanId } });
    //console.log(loanId);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
