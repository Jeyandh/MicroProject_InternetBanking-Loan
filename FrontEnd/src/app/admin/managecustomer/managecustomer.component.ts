import { Component, Inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerComponent } from '../customer/customer.component';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-managecustomer',
  templateUrl: './managecustomer.component.html',
  styleUrls: ['./managecustomer.component.scss']
})
export class ManagecustomerComponent {
  displayedColumns: string[] = ['userId', 'userName', 'userEmail', 'password','userContact','userAccNo','action'];
  dataSource!: MatTableDataSource<any>

  constructor(private _cust:CustomerService, private _dialog:MatDialog, private _snackbar: SnackbarService){}

  ngOnInit(): void {
      this.getCustomer(); //To get the values
  }

  // addCustomer(){
  //   const dialogRef = this._dialog.open(CustomerComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if(val){
  //         this.getCustomer();
  //       }
  //     },
  //     error: console.log
  //   });
  // }

  getCustomer(){
    this._cust.getAllCustomers().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

  deleteCustomer(id:number){
    this._cust.deleteCustomers(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar("Record Deleted", "Done"); //Delete customer
        this.getCustomer();
      }
    });
  }

  updateCustomer(data:any){
    const dialogRef = this._dialog.open(CustomerComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getCustomer();
        }
      },
      error: console.log
    });
  }
}
