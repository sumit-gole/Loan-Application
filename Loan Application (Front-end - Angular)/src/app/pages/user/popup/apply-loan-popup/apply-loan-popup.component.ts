import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-apply-loan-popup',
  templateUrl: './apply-loan-popup.component.html',
  styleUrls: ['./apply-loan-popup.component.css']
})
export class ApplyLoanPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ApplyLoanPopupComponent>
  ) { }

  cancel(){
    this.dialogRef.close(true);
  }

  ngOnInit(): void {}

}
