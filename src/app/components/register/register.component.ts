import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router,private _FormBuilder:FormBuilder){}
  errMessage:string='';
  isLoading:boolean=false;
  resgisterForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    rePassword:new FormControl(''),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  },{validators:[this.customConferm]} as FormControlOptions );
  // resgisterForm:FormGroup=this._FormBuilder.group({
  //   name:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  //   email:[null,[Validators.required,Validators.email]],
  //   password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
  //   rePassword:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
  //   phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
  // })
  customConferm(group:FormGroup):void{
    let password=group.get('password')
    let rePassword=group.get('rePassword')
    if(rePassword?.value==''){
      rePassword.setErrors({required:true})
    }else if(password !== rePassword){
      rePassword?.setErrors({noMatching:true})
  }
}
  handelFrom(): void {
    this.isLoading=true;
    if(this.resgisterForm.valid===true){
      this._AuthService.register(this.resgisterForm.value).subscribe({
        next:(response)=>{
          this.isLoading=false;
          console.log(response);
          if(response.message==='success'){
              this._Router.navigate(['/login'])
          }
        },
        error:(err)=>{
          this.isLoading=false;
          console.log(err);
          this.errMessage=err.error.message;
        },
        complete:()=>{
          console.log('complete');
        }
      })
      console.log(this.resgisterForm.value);
    }else{
      this.resgisterForm.markAllAsTouched();
    }
  }
}
