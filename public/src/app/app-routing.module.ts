import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { ClothesComponent} from './clothes/clothes.component';
import { StrollersComponent } from './strollers/strollers.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BathComponent } from './bath/bath.component';
import { SeatsComponent } from './seats/seats.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'products'},
  {path:'products',component:ProductsComponent},
  {path:'products/product/:id',component:ProductComponent},
  {path:'products/new',component:NewComponent},
  {path:'registration',component:RegComponent},
  {path:'products/clothes',component:ClothesComponent},
  {path:'products/strollers',component:StrollersComponent},
  {path:'products/accessories',component:AccessoriesComponent},
  {path:'products/bath',component:BathComponent},
  {path:'products/seats',component:SeatsComponent},
  {path:'login',component:LoginComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
