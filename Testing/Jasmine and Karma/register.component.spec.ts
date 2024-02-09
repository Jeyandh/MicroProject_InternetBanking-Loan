import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register.component';

describe('Register Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
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
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  it('Register Component Test', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });

  it(`should have as title 'Register Form Component'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Register Form');
  });

  it('Register Form Input GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#registerForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });

  it('Register Form Button GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#registerForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    const registerFormGroup = register.registerForm;
    const registeFormValues = {
      userId: '',
      userName: '',
      userEmail:'',
      password: '',
      userContact: '',
      userAccNo:'',
      userType:''
    }
    expect(registerFormGroup.value).toEqual(registeFormValues);
  });

  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const login = fixture.componentInstance;
    login.registerForm.controls?.['userId'].setValue("11");
    login.registerForm.controls?.['userName'].setValue("jeyandhan");
    login.registerForm.controls?.['userEmail'].setValue("jeyandhan11@gmail.com");
    login.registerForm.controls?.['password'].setValue("jeyandh");
    login.registerForm.controls?.['userContact'].setValue("6382216615");
    login.registerForm.controls?.['userAccNo'].setValue("8342748924284398");
    login.registerForm.controls?.['userType'].setValue("user");
    expect(login.registerForm.valid).toBeTruthy();
  });
});
