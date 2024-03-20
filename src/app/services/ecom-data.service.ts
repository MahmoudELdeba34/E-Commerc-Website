import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomDataService {
  constructor(private _HttpClient:HttpClient) { }
  getProducts():Observable<any>{
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getSpacific(id:string):Observable<any>{
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getCategories():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getBrands():Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  getBrandsDetalis(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }
  getSpacificCtegory(id:string):Observable<any>{
    return this._HttpClient.get(  `https://ecommerce.routemisr.com/api/v1/${id}`)
  }
  getProductsSpacific(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
