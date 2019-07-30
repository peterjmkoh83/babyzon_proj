import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'products'},
  {path:'products',component:ProductsComponent},
  {path:'products/product/:id',component:ProductComponent},
  {path:'products/new',component:NewComponent},
  {path:'products/registration',component:RegComponent},
  {path:'products/login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
