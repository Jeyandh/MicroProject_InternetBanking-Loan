import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { users } from '../common/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emaildata: any;
  loginForm: FormGroup;
  user: users;
  constructor(
    private _builder: FormBuilder,
    private _http: HttpClient,
    private _router: Router,
    private _toastr: ToastrService,
    private _auth: AuthService
  ) {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.user = new users();
  }
  login(data: any) {
    this.user.userEmail = data.userEmail;
    this.user.password = data.password;
    this._auth.login(this.user).subscribe((resultdata: any) => {
      console.log(resultdata);

      if (resultdata.message == 'Admin Success') {
        this._router.navigate(['/admin']);
      } else if (resultdata.message == 'User Success') {
        this._router.navigate(['']);
      } else {
        this._toastr.warning('Invalid User');
      }
    });
  }
}
