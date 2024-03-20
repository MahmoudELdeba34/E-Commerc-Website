import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { PaymentDetalisComponent } from './components/payment-detalis/payment-detalis.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { BrandDetalisComponent } from './components/brand-detalis/brand-detalis.component';
import { CategoryDetalisComponent } from './components/category-detalis/category-detalis.component';
import { ProductsDetalisComponent } from './components/products-detalis/products-detalis.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[authGuard],
    component: BlankLayoutComponent,
    title: 'blank',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'home' },
      { path: 'cart', component: CartComponent, title: 'cart' },
      {
        path: 'categories',
        component: CategoriesComponent, 
        title: 'Categories',
      },
      {path:'paymentDetalis/:id',component:PaymentDetalisComponent,title:'paymentDetalis'},
      {path:'allorders',component:AllOrdersComponent,title:'ALL Orders'},
      {path:'setting',loadChildren:()=>import('./setting/setting.module').then((parm)=>parm.SettingModule),title:'ALL Orders'},
      {path:"details/:id",component:DetailsComponent,title:'Datalis'},
      { path: 'barnds', component: BrandsComponent, title: 'Brabds' },
      {path:'barnds/:id',component:BrandDetalisComponent,title:'Brands Detalis'},
      {path:'categories/:id',component:CategoryDetalisComponent,title:'Category Detalis'},
      {path:'products/:id',component:ProductsDetalisComponent,title:'Product Detalis'},
      { path: 'products', component: ProductsComponent, title: 'products' },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    title: 'auth',
    children: [
      { path: '', redirectTo:"login", pathMatch:"full" },
      { path: 'login', component: LoginComponent, title: 'login' },
      { path: 'register', component: RegisterComponent, title: 'register' },
    ],
  },
  { path: '**', component: NotfoundComponent, title: 'Footer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
