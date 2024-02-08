import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ViewloanComponent } from './user/viewloan/viewloan.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { ManagecustomerComponent } from './admin/managecustomer/managecustomer.component';
import { RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ManageloanComponent } from './admin/manageloan/manageloan.component';
import { LoanComponent } from './admin/loan/loan.component';
import { LoginComponent } from './login/login.component';
import { UserloanComponent } from './user/userloan/userloan.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ApplyloansComponent } from './user/applyloans/applyloans.component';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewloanComponent,
    CustomerComponent,
    ManagecustomerComponent,
    AdminhomeComponent,
    ManageloanComponent,
    LoanComponent,
    LoginComponent,
    UserloanComponent,
    UserhomeComponent,
    ApplyloansComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    RouterModule  ,
    MatGridListModule,
    MatCardModule,
  MatSnackBarModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
