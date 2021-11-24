import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pay-loan-popup',
  templateUrl: './pay-loan-popup.component.html',
  styleUrls: ['./pay-loan-popup.component.css']
})
export class PayLoanPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PayLoanPopupComponent>) { }

  ngOnInit() {}

  cancel(){
    this.dialogRef.close(false);
  }

  confirm(){
    this.dialogRef.close(true);
  }

}
