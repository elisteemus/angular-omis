import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  people = [
    {firstName: "Eva", lastName: "Tamm", age: "21", address: "Eesti"},
    {firstName: "Toomas", lastName: "Lepp", age: "32", address: "Eesti"},
    {firstName: "Mari", lastName: "Mägi", age: "56", address: "Eesti"},
    {firstName: "Liisa", lastName: "Meri", age: "46", address: "Eesti"},
    {firstName: "Tiit", lastName: "Kivi", age: "87", address: "Eesti"},
  ]

  constructor() { }

  removeAll() {
    this.people = [];
  }

  removeOne(index) {
    this.people.splice(index,1);
  }

  addOne(human) {
    this.people.push(human);
  }

  getOne(index) {
    return this.people[index];
  }

  getAll() {
    return this.people.slice();
  }
  
}
