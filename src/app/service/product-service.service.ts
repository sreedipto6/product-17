import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
private baseurl : string = "http://localhost:3000/product"
  constructor(private http:HttpClient) { }

  getUser():Observable<any>{
    return this.http.get<any>(this.baseurl);
  }

  saveUser(inp:any):Observable<any>{
    return this.http.post<any>(this.baseurl,inp)
  }

  updateUser(inp:any,id:any):Observable<any>{
    return this.http.put<any>(this.baseurl+'/'+id,inp)
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete<any>(this.baseurl+ '/' + id)

  }
}
