import { Component, OnInit } from '@angular/core';
import {Cart} from './cart';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_items:Cart[]=[];
  cart_contents = [];
  products:Cart[];
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit() {
    this.cartService.fetchProducts()
    .subscribe((products)=>this.products=products['products']);  
  }

  selectItem($event)
  {
    
    let checkedItem = $event.target.value;
    let self = this;
    this.products.filter((value,index,products)=>{
      if(value.item_no==checkedItem)
      {
        let status = self.checkItemExists(checkedItem)
        if(!status)
        {
          self.cart_items.push(value);
          self.cartService.updatedDataSelection(self.cart_items);
        }
        else
        {
            delete self.cart_items[status];
        }
      }
    })
  }

  checkItemExists(checkedItem)
  {
    let flag:any=false;
    this.cartService.cart_items.subscribe((data)=>{
          console.log(data);
          data.filter((value,index,products)=>{
            if(value.item_no==checkedItem)
            {
              flag = index;
            }
          })
    })
    return flag;
  }

  reviewCart()
  {
    this.router.navigate(['review-cart']);
  }
}
