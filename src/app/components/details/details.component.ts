import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { EcomDataService } from 'src/app/services/ecom-data.service';
import { Product } from 'src/app/shared/guards/interface/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements  OnInit{
  productDetalis:Product={} as Product;
  constructor(private _ActivatedRoute:ActivatedRoute,private _EcomDataService:EcomDataService,private _CartServicesService:CartServicesService,private _ToastrService:ToastrService){}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parm) =>{
           let productId:any= parm.get("id")
          this._EcomDataService.getSpacific(productId).subscribe({
            next:(response)=>{
              this.productDetalis=response.data;
              console.log(response.data);
            }
          })
          console.log(productId);
          

        }
    
      })

      
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    items:1,
    nav: true
  }
   addProductToCart(id:string):void{
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
          console.log('completed');
          
        }
       })
   }
}


