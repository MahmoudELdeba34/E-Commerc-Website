import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomDataService } from 'src/app/services/ecom-data.service';

@Component({
  selector: 'app-brand-detalis',
  templateUrl: './brand-detalis.component.html',
  styleUrls: ['./brand-detalis.component.scss']
})
export class BrandDetalisComponent implements OnInit{
constructor(private _ActivatedRoute:ActivatedRoute,private _EcomDataService:EcomDataService){}
dataBrands:any
_id:any='' 
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(id)=>{
        let brandId:any=id.get('id')
        console.log(brandId);
         this._EcomDataService.getBrandsDetalis(brandId).subscribe({
          next:(response)=>{
            console.log(response);
            this.dataBrands=response
          }
         })
      }
    })
}
}
