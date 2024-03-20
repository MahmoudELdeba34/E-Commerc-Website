import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-payment-detalis',
  templateUrl: './payment-detalis.component.html',
  styleUrls: ['./payment-detalis.component.scss']
})
export class PaymentDetalisComponent implements OnInit{
constructor(private _FormBuilder:FormBuilder,private _ActivatedRoute:ActivatedRoute,private _CartServicesService:CartServicesService,private _Router:Router){}
cartId:any='';   //cartId
chickOut:FormGroup=this._FormBuilder.group({
  details:['',Validators.required],
  phone:['',Validators.required],
  city:['',Validators.required]
})
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(prams)=>{
        console.log(prams.get('id'));
        this.cartId=prams.get('id')
       
      }
    })
}
getDetalis(){
this._CartServicesService.chickOut(this.cartId,this.chickOut.value).subscribe({
  next:(response)=>{
    console.log(response);
    if(response.status=='success'){
     open(response.session.url,'_self');

    }
  },
  error:(err)=>{
    console.log(err);
  },
  complete:()=>{
    console.log('completed chekOut payment');
    
  }
})

}
}
