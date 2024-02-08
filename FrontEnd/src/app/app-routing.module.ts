import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ManagecustomerComponent } from './admin/managecustomer/managecustomer.component';
import { LoginComponent } from './login/login.component';
import { ManageloanComponent } from './admin/manageloan/manageloan.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewloanComponent } from './user/viewloan/viewloan.component';
import { ApplyloansComponent } from './user/applyloans/applyloans.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminhomeComponent },
    { path: 'managecustomer', component: ManagecustomerComponent },
    { path: 'manageloan', component: ManageloanComponent },
    { path: 'user', component: UserhomeComponent },
    {path: 'userloan', component:ViewloanComponent},
    {path: 'userapply', component: ApplyloansComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
