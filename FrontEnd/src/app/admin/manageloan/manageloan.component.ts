import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LoanService } from 'src/app/service/loan.service';
import { LoanComponent } from '../loan/loan.component';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-manageloan',
  templateUrl: './manageloan.component.html',
  styleUrls: ['./manageloan.component.scss']
})
export class ManageloanComponent {
  displayedColumns: string[] = ['loanId', 'loanType', 'loanAmount', 'loanEmi','loanIntrest','userName','userAccNo','userId','action'];
  dataSource!: MatTableDataSource<any>

  constructor(private _loan:LoanService, private _dialog:MatDialog, private _snackbar: SnackbarService){}

  ngOnInit(): void {
      this.getLoan(); //To get the values
  }

  addLoan(){
    const dialogRef = this._dialog.open(LoanComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getLoan();
        }
      },
      error: console.log
    });
  }

  getLoan(){
    this._loan.getAllLoans().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

  deleteLoan(id:number){
    this._loan.deleteLoans(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar("Record Deleted", "Done"); //Delete Loan
        this.getLoan();
      }
    });
  }

  updateLoan(data:any){
    const dialogRef = this._dialog.open(LoanComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getLoan();
        }
      },
      error: console.log
    });
  }
}
