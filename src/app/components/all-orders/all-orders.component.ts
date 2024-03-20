import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit{
constructor(private _CartServicesService:CartServicesService,private _AuthService:AuthService){}

ngOnInit(): void {
  // let Iddata = this._AuthService.Decode;
  // console.log(this._AuthService.Decode);
    this._CartServicesService.getAllOrder().subscribe({
      next:(reponse)=>{
        console.log(reponse);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('completed all order');
        
      }
    })
}

}
