import { Injectable } from '@angular/core';
import { Cat } from '../cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatSelectService {
  cats: Cat[] = [];

  constructor() { }

  addCat(cat: Cat): void {
    this.cats.push(cat);
  }

  removeAllCats(): void {
    this.cats = [];
  }

  removeOne(i: number): void {
    this.cats.splice(i, 1);
  }

  getCats(): Cat[] {
    return this.cats.slice();
  }
}
