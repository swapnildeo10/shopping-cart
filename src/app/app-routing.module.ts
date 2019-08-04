import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {AppComponent} from './app.component';
import {ReviewCartComponent} from './review-cart/review-cart.component';
const routes: Routes = [
  {'path':'','component':AppComponent},
  {'path':'cart-items','component':CartComponent},
  {'path':'review-cart','component':ReviewCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
