import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServicesService {
  cartItems:BehaviorSubject<number>=new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient) {
    this.getCart().subscribe({
      next:(res)=>{
        this.cartItems.next(res.numOfCartItems)
      }
    })
  }
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId }
    );
  }
  getCart(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {}
    );
  }
  removeFromCart(id: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`
    );
  }
  updateQuantity(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count: count,
      }
    );
  }
  chickOut(cartId: string, body: any): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: body,
      }
    );
  }
  getAllOrder(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17`
    );
  }

}
