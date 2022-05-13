import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyimageComponent } from './Components/bodyimage/bodyimage.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'', component :MainLayoutComponent , children:[
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path:'products', component: ShoppingCartComponent},
  {path:'cart', component: CartComponent},
  {path:'Product/:pid', component: ProductDetailsComponent},
  {path:'bodyimage', component: BodyimageComponent}

 
  ]},
  {path:'Register', component: RegisterComponent},
  {path:'Home', component: HomeComponent},

  {path:'Login', component: LoginComponent},
  {path:'Contact', component: ContactUsComponent},
  {path:'**', component: NotFoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
