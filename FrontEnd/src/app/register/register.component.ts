import { Component } from '@angular/core';
import { users } from '../common/users';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms'
import {ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _builder: FormBuilder,private _http:HttpClient, private _router: Router, private _toastr: ToastrService,
    private _auth:AuthService){}
    registerForm = this._builder.group({
      userId: this._builder.control('',Validators.required),
      userName: this._builder.control('',Validators.required),
      userEmail: this._builder.control('',Validators.required),
      password: this._builder.control('', Validators.required),
      userContact: this._builder.control('', Validators.required),
      userAccNo: this._builder.control('', Validators.required),
      userType: this._builder.control('', ),
    }); 
      
  register(){
    if(this.registerForm.valid){
      this._auth.register(this.registerForm.value).subscribe((_res:any) => {
          this._toastr.success("Registered successfully");
          this._router.navigate(['login']);
      })
    }else{
        this._toastr.warning("Please enter valid data");
    }
  }


}
