import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../../models/loan';
import { PaymentSchedule } from '../../models/paymentSchedule';

//import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  private baseUrl = 'http://localhost:8080/token/';

  constructor(private http: HttpClient) { }

  saveLoan(loan: object): Observable<Loan> {
    return this.http.post<Loan>(`${this.baseUrl}` + 'loan', loan);
  }
  
  getLoanList(customerId: string): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.baseUrl}` + 'loans/' + `${customerId}`);
  }

  getPaymentSchedule(loanId: string): Observable<PaymentSchedule[]> {
    return this.http.get<PaymentSchedule[]>(`${this.baseUrl}` + 'loan/payment-schedule/' + `${loanId}`);
  }

  updatePaymentStatus(paymentId:any){
    return this.http.put<PaymentSchedule>(`${this.baseUrl}`+`update-payment/`+`${paymentId}`,null);
  }
  
}
