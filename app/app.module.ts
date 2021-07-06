import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';


import { BlogsModule} from "./blogs/blogs.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { FiltersComponent } from './shoping-cart/filters/filters.component';
import { ProductListComponent } from './shoping-cart/product-list/product-list.component';
import { CartComponent } from './shoping-cart/cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import { CartItemComponent } from './shoping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './shoping-cart/product-list/product-item/product-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VegetablesComponent,
    ShopingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    CarouselComponent,
    RegisterComponent,
    
    
   
  ],
  imports: [
    CommonModule,
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatCarouselModule,
    MatCardModule,
    MatGridListModule,
    BlogsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule ,
    MatDialogModule,
    MatTableModule,
    MatMenuModule
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
  
})
export class AppModule { }
