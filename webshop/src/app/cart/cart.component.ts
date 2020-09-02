import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartSum = 600;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemsInCart();
    this.cartSum = 0;
    this.cartItems.forEach((item) =>{
      this.cartSum = this.cartSum + (Number)(item.price);
    })
  }

  onDelete() {
    this.cartService.removeAll();
    this.cartItems = this.cartService.getItemsInCart();
  }

  onDeleteOne(i) {
    this.cartService.removeItem(i);
    this.cartItems = this.cartService.getItemsInCart();
    this.cartSum = 0;
    this.cartItems.forEach((item) =>{
      this.cartSum = this.cartSum + (Number)(item.price);
    })
  }

}
