import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import {Cart} from './cart/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart_items:BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]);
  //data = this.dataSource.asObservable();
  constructor(private http:HttpClient) { }
  apiUrl = "http://localhost:3000/api"
  fetchProducts()
  {
    let options =  {
      headers : new HttpHeaders({'Content-Type':"application/json"})
    }  
    return this.http.get(this.apiUrl+"/getProducts",options)
           .pipe(tap((res)=>{return res})); 
  }

  updatedDataSelection(cart: Cart[]){
    this.cart_items.next(cart);
  }

}
