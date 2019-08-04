import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import {CartService} from './cart.service';
import {SampleInterceptor} from './sample.interceptor';
import {FormsModule} from '@angular/forms';
import { ReviewCartComponent } from './review-cart/review-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ReviewCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartService,{
    provide: HTTP_INTERCEPTORS,
      useClass: SampleInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
