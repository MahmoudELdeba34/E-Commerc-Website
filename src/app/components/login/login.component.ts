import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  errMsg:string=''
 loginForm:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)])
 })
 isLogin:boolean=false;
 handelLogin():void{
  if(this.loginForm.valid){
    this.isLogin=true
    console.log(this.loginForm.value);
    this._AuthService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        this.isLogin=false;
        if(response.message=='success'){
          localStorage.setItem('eToken',response.token)
          this._Router.navigate(['/home'])
        }
      },
      error:(err)=>{
        console.log(err);
        this.errMsg=err.error.message;
        this.isLogin=false
      },
      complete:()=>{
        console.log('complete');
        
      }
    })
  }else{
    this.loginForm.markAllAsTouched()
  }
 }

}

