import { Component, OnInit } from '@angular/core';
import { EcomDataService } from 'src/app/services/ecom-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
constructor(private _EcomDataService:EcomDataService){}
golbalCategories:any[]=[];
ngOnInit(): void {
    this._EcomDataService.getCategories().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.golbalCategories=response.data
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('completed categorise');
        
      }
    })
}
}
