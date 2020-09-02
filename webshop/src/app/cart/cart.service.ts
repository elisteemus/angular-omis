import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart = [];

  constructor() { }

  getItemsInCart () {
    return this.itemsInCart.slice();
  }

  removeAll () {
    this.itemsInCart = [];
  }

  addItem(item) {
    this.itemsInCart.push(item);
  }

  removeItem(i) {
    this.itemsInCart.splice(i, 1);
  }
}
