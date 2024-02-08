import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  private url='http://localhost:9090';


  login(User:any) {
    return this._http.post(this.url+"/login",User);
  }
  register(inputdata: any){
    return this._http.post(this.url+'/register', inputdata);
  }

}
