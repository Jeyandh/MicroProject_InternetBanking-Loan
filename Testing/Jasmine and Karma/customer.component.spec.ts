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
import { CustomerComponent } from './customer.component';


describe('Admin Customer Insert Component Test', () => {


  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [CustomerComponent],
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
    const fixture = TestBed.createComponent(CustomerComponent);
    const Customer = fixture.componentInstance;
    expect(Customer).toBeTruthy();
  });
  
  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#customerForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#customerForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
  
  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const customer = fixture.componentInstance;
    const customerFormGroup = customer.customerForm;
    const customerFormValues = {
        userId: '',
        userName: '',  
        userEmail: '',
        password: '',
        userContact:'',
        userAccNo: ''
    }
    expect(customerFormGroup.value).toEqual(customerFormValues);
  });
  
  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const customer = fixture.componentInstance;
    customer.customerForm.controls?.['userId'].setValue("11");
    customer.customerForm.controls?.['userName'].setValue("Jeyandhan");
    customer.customerForm.controls?.['userEmail'].setValue("jey@gmail.com");
    customer.customerForm.controls?.['password'].setValue("jeyandh");
    customer.customerForm.controls?.['userContact'].setValue("6432671289");
    customer.customerForm.controls?.['userAccNo'].setValue("243778342934834433");
    expect(customer.customerForm.valid).toBeTruthy();
  });
  });
  


describe('Update Component Test', () => {


beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CustomerComponent],
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
  const fixture = TestBed.createComponent(CustomerComponent);
  const Customer = fixture.componentInstance;
  expect(Customer).toBeTruthy();
});

it('Update Form Input GUI count', () => {
  const fixture = TestBed.createComponent(CustomerComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#customerForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(6);
});
it('Update Form Button GUI count', () => {
  const fixture = TestBed.createComponent(CustomerComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#customerForm");
  const inputElements = formElement.querySelectorAll("button");
  expect(inputElements.length).toEqual(2);
});

it('Update Form initial values', () => {
  const fixture = TestBed.createComponent(CustomerComponent);
  const customer = fixture.componentInstance;
  const customerFormGroup = customer.customerForm;
  const customerFormValues = {
      userId: '',
      userName: '',  
      userEmail: '',
      password: '',
      userContact:'',
      userAccNo: ''
  }
  expect(customerFormGroup.value).toEqual(customerFormValues);
});

it('Testing Form valid', () => {
  const fixture = TestBed.createComponent(CustomerComponent);
  const customer = fixture.componentInstance;
  customer.customerForm.controls?.['userId'].setValue("11");
  customer.customerForm.controls?.['userName'].setValue("Jeyandhan");
  customer.customerForm.controls?.['userEmail'].setValue("jey@gmail.com");
  customer.customerForm.controls?.['password'].setValue("jeyandh");
  customer.customerForm.controls?.['userContact'].setValue("6432671289");
  customer.customerForm.controls?.['userAccNo'].setValue("243778342934834433");
  expect(customer.customerForm.valid).toBeTruthy();
});
});

describe('Delete Component Test', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerComponent],
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
    const fixture = TestBed.createComponent(CustomerComponent);
    const Customer = fixture.componentInstance;
    expect(Customer).toBeTruthy();
  });

  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#customerForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
});