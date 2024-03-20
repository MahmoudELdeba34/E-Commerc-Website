import { Component, Input, OnInit } from '@angular/core';
import { EcomDataService } from 'src/app/services/ecom-data.service';
import { Product } from 'src/app/shared/guards/interface/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
dataPopular:Product[]=[];
Categories:any[]=[];
productSearch:string=''
constructor(private _EcomDataService:EcomDataService,private _CartServicesService:CartServicesService,private _ToastrService:ToastrService){}
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
    this._EcomDataService.getProducts().subscribe({
      next:(response)=>{
        console.log(response);
        this.dataPopular=response.data
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('complete');
        
      }
    });

    this._EcomDataService.getCategories().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.Categories=response.data
      },
      error:(err)=>{
        console.log(err);
        
      },
      complete:()=>{
        console.log('complete');
        
      }
    });
     
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
}


}
