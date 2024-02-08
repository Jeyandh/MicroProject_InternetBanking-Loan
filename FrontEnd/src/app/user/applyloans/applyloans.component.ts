import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LoanComponent } from 'src/app/admin/loan/loan.component';
import { LoanService } from 'src/app/service/loan.service';
import { UserloanComponent } from '../userloan/userloan.component';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-applyloans',
  templateUrl: './applyloans.component.html',
  styleUrls: ['./applyloans.component.scss']
})
export class ApplyloansComponent {
  dataSource!: MatTableDataSource<any>
  constructor(private _loan:LoanService, private _dialog:MatDialog, private _snackbar: SnackbarService){}

  ngOnInit(): void {
      this.getLoan(); //To get the values
  }

  addLoan(){
    const dialogRef = this._dialog.open(UserloanComponent);
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

}
