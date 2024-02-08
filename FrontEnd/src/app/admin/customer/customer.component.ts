import { Component, Inject } from '@angular/core';


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/service/customer.service';
import { Routes } from '@angular/router';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customerForm:FormGroup;
  constructor(private _cust:CustomerService, private _dialogRef:MatDialogRef<CustomerComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any, private _snackbar: SnackbarService){

    this.customerForm = new FormGroup ({ 
      userId: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),  
      userEmail: new FormControl('',[Validators.required, Validators.pattern ('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      password: new FormControl('',[Validators.required, Validators.pattern ('^[a-zA-Z0-9+]+$')]),
      userContact: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userAccNo: new FormControl('',[Validators.required, Validators.pattern('[0-9]+')])
    });
  }
  ngOnInit(): void {
      this.customerForm.patchValue(this.data); //To view the existing data when click update
  }

  onSubmit(){
    
    if(this.customerForm.valid){
      if(this.data){// Update Customer
        this._cust.updateCustomers(this.data.id,this.customerForm.value).subscribe({
          next:(val) => {
            this._snackbar.openSnackBar("Customer details Updated","Done")
            this._dialogRef.close(true);
          }
        });
      }
    }
}
}
