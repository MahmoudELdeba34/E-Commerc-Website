import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { EcomDataService } from 'src/app/services/ecom-data.service';

@Component({
  selector: 'app-products-detalis',
  templateUrl: './products-detalis.component.html',
  styleUrls: ['./products-detalis.component.scss']
})
export class ProductsDetalisComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute,private _EcomDataService:EcomDataService,private _CartServicesService:CartServicesService,private _ToastrService:ToastrService){}
  allData:any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptionsStaticSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    items:1,
    nav: false,
  }
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(id)=>{
        console.log(id.get('id'));
        let productId:any=id.get('id');
        this._EcomDataService.getProductsSpacific(productId).subscribe({
          next:(response)=>{
            this.allData=response;
            console.log(this.allData);
          }
        })
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
