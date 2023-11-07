import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient,private router:Router) { }

  sing(data:any){
    return this.http.post("http://localhost:8070/products/new",data,{responseType:"arraybuffer"});
  }
  logindata(data:any){
   return this.http.post("http://localhost:8070/products/authenticate1",data) ;
  }


  isLogged():boolean{
    return !!localStorage.getItem("token")
  }
  getdata(){
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem("token")}`
    })
    return this.http.get("http://localhost:8070/products/all",{headers});
  }
}
