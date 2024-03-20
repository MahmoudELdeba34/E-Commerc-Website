import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'update',pathMatch:'full'},
  {path:'update',component:UpdateComponent,title:'update'},
  {path:'forgetPassword',component:ForgetPasswordComponent,title:'Forget Password'},
  {path:"**",component:NotfoundComponent,title: "Page not found"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
