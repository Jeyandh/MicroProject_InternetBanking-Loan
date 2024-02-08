import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LoanComponent } from 'src/app/admin/loan/loan.component';
import { LoanService } from 'src/app/service/loan.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.scss']
})
export class ViewloanComponent {
  displayedColumns: string[] = ['loanId', 'loanType', 'loanAmount', 'loanEmi','loanIntrest','userId'];
  dataSource!: MatTableDataSource<any>

  constructor(private _loan:LoanService, private _dialog:MatDialog, private _snackbar: SnackbarService){}

  ngOnInit(): void {
      this.getLoan(); //To get the values
  }


  getLoan(){
    this._loan.getAllLoans().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

 
}
