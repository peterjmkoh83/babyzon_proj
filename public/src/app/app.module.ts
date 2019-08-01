import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClothesComponent } from './clothes/clothes.component';
import { StrollersComponent } from './strollers/strollers.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BathComponent } from './bath/bath.component';
import { SeatsComponent } from './seats/seats.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    NewComponent,
    LoginComponent,
    RegComponent,
    ClothesComponent,
    StrollersComponent,
    AccessoriesComponent,
    BathComponent,
    SeatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
