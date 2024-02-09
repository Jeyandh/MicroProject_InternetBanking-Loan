import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { LoanComponent } from './loan.component';


describe(' Admin loan Insert Component Test', () => {


  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [LoanComponent],
      imports:[
          BrowserModule,
          BrowserAnimationsModule,
          ReactiveFormsModule,
          HttpClientModule,
          MatToolbarModule,
          MatButtonModule,
          MatIconModule,
          MatDialogModule,
          MatFormFieldModule,
          MatInputModule,
          MatSelectModule,
          MatTableModule,
          MatSnackBarModule,
        ],
        providers: [
          
            { provide: MAT_DIALOG_DATA, useValue: {} },
            { provide: MatDialogRef, useValue: {} }
          
        ]
      }).compileComponents();
  });
  
  it('Insert Component Test', () => {
    const fixture = TestBed.createComponent(LoanComponent);
    const Customer = fixture.componentInstance;
    expect(Customer).toBeTruthy();
  });
  
  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(LoanComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#loanForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(8);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(LoanComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#loanForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
  
  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(LoanComponent);
    const loan = fixture.componentInstance;
    const loanFormGroup = loan.loanForm;
    const loanFormValues = {
      loanId: '',
      loanType:'' ,  
      loanAmount: '',
      loanEmi:'',
      loanIntrest:'' ,
      userName: '',
      userAccNo: '',
      userId: '',
    }
    expect(loanFormGroup.value).toEqual(loanFormValues);
  });
  
  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(LoanComponent);
    const loan = fixture.componentInstance;
    loan.loanForm.controls?.['loanId'].setValue("5");
    loan.loanForm.controls?.['loanType'].setValue("Gold");
    loan.loanForm.controls?.['loanAmount'].setValue("500000");
    loan.loanForm.controls?.['loanEmi'].setValue("15000");
    loan.loanForm.controls?.['loanIntrest'].setValue("10.50");
    loan.loanForm.controls?.['userName'].setValue("Jeyandhan");
    loan.loanForm.controls?.['userAccNo'].setValue("24377834294433");
    loan.loanForm.controls?.['userId'].setValue("11")
    expect(loan.loanForm.valid).toBeFalsy();
  });
  });
  


describe(' Admin loan Update Component Test', () => {


beforeEach(async () => {
  await TestBed.configureTestingModule({
  declarations: [LoanComponent],
  imports:[
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTableModule,
      MatSnackBarModule,
    ],
    providers: [
      
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      
    ]
  }).compileComponents();
});

it('Update Component Test', () => {
const fixture = TestBed.createComponent(LoanComponent);
const Customer = fixture.componentInstance;
expect(Customer).toBeTruthy();
});

it('Update Form Input GUI count', () => {
const fixture = TestBed.createComponent(LoanComponent);
const formElement = fixture.debugElement.nativeElement.querySelector("#loanForm");
const inputElements = formElement.querySelectorAll("input");
expect(inputElements.length).toEqual(8);
});
it('Update Form Button GUI count', () => {
const fixture = TestBed.createComponent(LoanComponent);
const formElement = fixture.debugElement.nativeElement.querySelector("#loanForm");
const inputElements = formElement.querySelectorAll("button");
expect(inputElements.length).toEqual(2);
});

it('Update Form initial values', () => {
const fixture = TestBed.createComponent(LoanComponent);
const loan = fixture.componentInstance;
const loanFormGroup = loan.loanForm;
const loanFormValues = {
  loanId: '',
  loanType:'' ,  
  loanAmount: '',
  loanEmi:'',
  loanIntrest:'' ,
  userName: '',
  userAccNo: '',
  userId: '',
}
expect(loanFormGroup.value).toEqual(loanFormValues);
});

it('Testing Form valid', () => {
const fixture = TestBed.createComponent(LoanComponent);
const loan = fixture.componentInstance;
loan.loanForm.controls?.['loanId'].setValue("5");
loan.loanForm.controls?.['loanType'].setValue("Gold");
loan.loanForm.controls?.['loanAmount'].setValue("500000");
loan.loanForm.controls?.['loanEmi'].setValue("15000");
loan.loanForm.controls?.['loanIntrest'].setValue("10.50");
loan.loanForm.controls?.['userName'].setValue("Jeyandhan");
loan.loanForm.controls?.['userAccNo'].setValue("24377834294433");
loan.loanForm.controls?.['userId'].setValue("11")
expect(loan.loanForm.valid).toBeFalsy();
});
});


describe('Admin loan Delete Component Test', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanComponent],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
      ],
      providers: [
        
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }
        
      ]
    }).compileComponents();
  });
  
  it('Delete Testing Component', () => {
    const fixture = TestBed.createComponent(LoanComponent);
    const loan = fixture.componentInstance;
    expect(loan).toBeTruthy();
  });

});