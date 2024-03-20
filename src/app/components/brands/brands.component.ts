import { Component, OnInit } from '@angular/core';
import { EcomDataService } from 'src/app/services/ecom-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
constructor(private _EcomDataService:EcomDataService){}
data:any[]=[]
ngOnInit(): void {
    this._EcomDataService.getBrands().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.data=response.data
      },
      error: (error) =>{
        console.log(error);
      },
      complete:()=>{
        console.log('completed Brands');
        
      }
    })
}
}
