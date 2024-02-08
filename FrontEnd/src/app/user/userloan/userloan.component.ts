import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoanComponent } from 'src/app/admin/loan/loan.component';
import { LoanService } from 'src/app/service/loan.service';
import { ApplyloansComponent } from '../applyloans/applyloans.component';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-userloan',
  templateUrl: './userloan.component.html',
  styleUrls: ['./userloan.component.scss']
})
export class UserloanComponent {
  loanForm:FormGroup;
  constructor(private _loan:LoanService, private _dialogRef:MatDialogRef<ApplyloansComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any, private _snackbar: SnackbarService){

    this.loanForm = new FormGroup ({ 
      loanId: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      loanType: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),  
      loanAmount: new FormControl('',[Validators.required, Validators.pattern ('[0-9]+')]),
      loanEmi: new FormControl('',[Validators.required,Validators.pattern ('[0-9]+')]),
      loanIntrest: new FormControl('',[Validators.required, Validators.pattern ('[0-9]+')]),
      userName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s]+')]),
      userAccNo: new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
      userId: new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
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
