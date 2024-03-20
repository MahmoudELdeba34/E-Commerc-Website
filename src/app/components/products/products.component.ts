import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { EcomDataService } from 'src/app/services/ecom-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
constructor(private _EcomDataService:EcomDataService,private _CartServicesService:CartServicesService,private _ToastrService:ToastrService){}
textTerm:string=''
datOfProducts:any[]=[]
ngOnInit(): void {
    this._EcomDataService.getProducts().subscribe({
      next:(reponse)=>{
        console.log(reponse.data);
        this.datOfProducts=reponse.data;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('compketed data od all product');
        
      }
    })
}
addcart(id:string):void{
  this._CartServicesService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(`${response.message}`,'Frish Cart')
      
    },
    error:(err)=>{
      console.log(err);
      this._ToastrService.warning(`${err.error.message}`,'Frish Cart')
    },
    complete:()=>{
      console.log('compeleted');
     
    }
  })
}}
