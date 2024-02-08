import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  private url: string = 'http://localhost:9090';

  addCustomers(data:any):Observable<any>{
    return this._http.post(this.url+"/adduser",data);
  }

  getAllCustomers():Observable<any>{
    return this._http.get(this.url+"/viewAllUser");
  }

  deleteCustomers(id:number):Observable<any>{
    return this._http.delete(this.url+"/deleteuser/"+id);
  }
  updateCustomers(id:number, data:any):Observable<any>{
    return this._http.put(this.url+"/edituser",data);
  }
}
