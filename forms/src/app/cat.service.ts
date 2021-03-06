import { Injectable } from '@angular/core';
import { Cat } from './cat.model'

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private cats = [
    {breed: "Siiami kass", firstname: "Garfield", picture: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"},
    {breed: "La Cranche", firstname: "Miisu", picture: "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"},
    {breed: "Siiami kass", firstname: "Garfield", picture: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"}
  ];

  constructor() { }

  getCats(): Cat[] {
    return this.cats.slice();
  }

  getCat(index: number): Cat {
    return this.cats[index];
  }

  addCat(cat: Cat): void {
    this.cats.push(cat);
  }

  editCat(cat: Cat, index: number) {
    this.cats[index] = cat;
  }
}
