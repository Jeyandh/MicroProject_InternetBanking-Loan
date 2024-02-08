import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/common/users';
import { AuthService } from 'src/app/service/auth.service';
import { LoanService } from 'src/app/service/loan.service';
import { SnackbarService } from 'src/app/service/snackbar.service';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent {
  loanForm:FormGroup;
  constructor(private _loan:LoanService, private _dialogRef:MatDialogRef<LoanComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any, private _snackbar: SnackbarService){

    this.loanForm = new FormGroup ({ 
      loanId: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      loanType: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),  
      loanAmount: new FormControl('',[Validators.required, Validators.pattern ('[0-9]+')]),
      loanEmi: new FormControl('',[Validators.required]),
      loanIntrest: new FormControl('',[Validators.required, Validators.pattern ('[0-9]+')]),
      userName: new FormControl('',[Validators.required]),
      userAccNo: new FormControl('',[Validators.required]),
      userId: new FormControl('',[Validators.required]),
    });
  }
  ngOnInit(): void {
      this.loanForm.patchValue(this.data); //To view the existing data when click update
  }

  onSubmit(){
    
    if(this.loanForm.valid){
      if(this.data){// Update loan
        this._loan.updateLoans(this.data.id,this.loanForm.value).subscribe({
          next:(val) => {
            this._snackbar.openSnackBar("Loan details Updated","Done")
            this._dialogRef.close(true);
          }
        })
      }else{// Add loan
        this._loan.addLoans(this.loanForm.value).subscribe({
          next: (_val) => {
            this._snackbar.openSnackBar("Loan Added","Done")
            this._dialogRef.close(true);
          }
        });
      }
    }
}
}
