import { Component, OnInit } from '@angular/core';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
constructor(private _CartServicesService:CartServicesService){}
globalDetalis:any={};
ngOnInit(): void {
    this._CartServicesService.getCart().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.globalDetalis=response.data;
      },
      error:(err)=>{
      console.log(err);
      },
      complete:()=>{
        console.log('complete');
      }
    })
}
removeProductFromCart(id:string){
  this._CartServicesService.removeFromCart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.globalDetalis=response.data
      
    },
    error:(err)=>{
      console.log(err);
      
    },
    complete:()=>{
      console.log('completed remove');
      
    }
  })
}
updateProduct(productId:string,count:number){
if(count>0){
  this._CartServicesService.updateQuantity(productId,count).subscribe({
    next:(response)=>{
      console.log(response.data);
      this.globalDetalis=response.data
    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{
      console.log('compleate UPdate');
      
    }
  })
}
}
}
