import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private _http:HttpClient) { }

  private url: string = 'http://localhost:9090';

  addLoans(data:any):Observable<any>{
    return this._http.post(this.url+"/addloan",data);
  }

  getAllLoans():Observable<any>{
    return this._http.get(this.url+"/viewAllLoan");
  }

  deleteLoans(id:number):Observable<any>{
    return this._http.delete(this.url+"/deleteloan/"+id);
  }
  updateLoans(id:number, data:any):Observable<any>{
    return this._http.put(this.url+"/editloan",data);
  }
}
