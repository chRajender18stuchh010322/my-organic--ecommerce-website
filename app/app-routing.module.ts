
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from 'src/app/shoping-cart/cart/cart.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  {path: 'vegetables', component:VegetablesComponent},
  { path: 'fruits', component: FruitsComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'login', component:LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'cart', component:  CartComponent },
  

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
