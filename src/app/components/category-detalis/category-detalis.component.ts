import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomDataService } from 'src/app/services/ecom-data.service';

@Component({
  selector: 'app-category-detalis',
  templateUrl: './category-detalis.component.html',
  styleUrls: ['./category-detalis.component.scss']
})
export class CategoryDetalisComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute,private _EcomDataService:EcomDataService){}
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(id)=>{
        console.log(id.get('id'));
        let categoryId:any=id.get('id')
        this._EcomDataService.getSpacificCtegory(categoryId).subscribe({
          next:(response)=>{
            console.log(response);
          },
          error:(err)=>{
            console.log(err);
          },
          complete:()=>{
            console.log('complete SpacificCtegory');
          }
        })
      }
    })
     
}

}
