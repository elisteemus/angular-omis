import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart = [];

  constructor() { }

  getItemsInCart(): Item[] {
    return this.itemsInCart.slice();
  }

  removeAll(): void {
    this.itemsInCart = [];
  }

  addItem(item: Item): void {
    this.itemsInCart.push(item);
  }

  removeItem(i: number): void {
    this.itemsInCart.splice(i, 1);
  }
}
