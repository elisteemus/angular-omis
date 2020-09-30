import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartSum = 600;

  constructor(private cartService: CartService,
    private toastService: ToastService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemsInCart();
    this.cartSum = 0;
    this.cartItems.forEach((item) =>{
      this.cartSum = this.cartSum + (Number)(item.price);
    })
  }

  onDelete(): void {
    this.cartService.removeAll();
    this.cartItems = this.cartService.getItemsInCart();
    this.toastService.info(this.translateService.instant ("Edukalt kõik esemed ostukorvist kustutatud"));
  }

  onDeleteOne(i: number): void {
    this.cartService.removeItem(i);
    this.cartItems = this.cartService.getItemsInCart();
    this.cartSum = 0;
    this.cartItems.forEach((item) =>{
      this.cartSum = this.cartSum + (Number)(item.price);
    })
    this.toastService.info("Edukalt valitud ese ostukorvist kustutatud");
  }

}
