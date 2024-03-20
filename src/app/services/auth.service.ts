import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }
  register(userata:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userata)
  }
  login(userData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
  }
  Decode!:any
  decodeData(){
    if(localStorage.getItem('eToken')!==null){
      const data:any=localStorage.getItem( "eToken")
     let decodeData= jwtDecode(data)
      console.log(decodeData);
      this.Decode=decodeData;
  }
  }
  logOut():void{
    localStorage.removeItem( 'eToken');
    this._Router.navigate(['/login'])
  }
  
}
