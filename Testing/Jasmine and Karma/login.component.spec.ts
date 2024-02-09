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
import { AppRoutingModule } from '../app-routing.module';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './login.component';

import {ToastrModule} from 'ngx-toastr';




describe('Login Component Test', () => {




beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [LoginComponent],
    imports:[
        BrowserModule,
        AppRoutingModule,
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
        ToastrModule.forRoot(),
      ],
      providers: [
       
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }
       
      ]
    }).compileComponents();
});


it('login Component Test', () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const login = fixture.componentInstance;
  expect(login).toBeTruthy();
});

it(`should have as title 'Login Form Component'`, () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Login Form');
});


it('Login Form Input GUI count', () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#loginForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(2);
});
it('Insert Form Button GUI count', () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#loginForm");
  const inputElements = formElement.querySelectorAll("button");
  expect(inputElements.length).toEqual(1);
});


it('Testing Form initial values', () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const login = fixture.componentInstance;
  const loginFormGroup = login.loginForm;
  const loginFormValues = {
    userEmail: '',
    password: '',
  }
  expect(loginFormGroup.value).toEqual(loginFormValues);
});


it('Testing Form valid', () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const login = fixture.componentInstance;
  login.loginForm.controls?.['userEmail'].setValue("jeyandhan@gmail.com");
  login.loginForm.controls?.['password'].setValue("jeyandhan");
  expect(login.loginForm.valid).toBeTruthy();
});
});
