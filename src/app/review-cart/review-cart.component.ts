import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Cart} from '../cart/cart';
@Component({
  selector: 'app-review-cart',
  templateUrl: './review-cart.component.html',
  styleUrls: ['./review-cart.component.css']
})
export class ReviewCartComponent implements OnInit {
  cart_items:Cart[];
  constructor(private cartService:CartService) { }
  total=0;
  ngOnInit() {
    this.cartService.cart_items.subscribe((data=>{
      this.cart_items=data;
    }))

    this.cart_items.forEach((item,index)=>{
        this.total+=(item.item_price)*item.item_quantity;
    })
  }

}
