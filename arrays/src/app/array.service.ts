import { Injectable } from '@angular/core';
import { Person } from './person.model'

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  people = [
    {firstName: "Eva", lastName: "Tamm", age: 21, address: "Eesti"},
    {firstName: "Toomas", lastName: "Lepp", age: 32, address: "Eesti"},
    {firstName: "Mari", lastName: "Mägi", age: 56, address: "Eesti"},
    {firstName: "Liisa", lastName: "Meri", age: 46, address: "Eesti"},
    {firstName: "Tiit", lastName: "Kivi", age: 87, address: "Eesti"},
  ]

  constructor() { }

  removeAll() {
    this.people = [];
  }

  removeOne(index: number): void {
    this.people.splice(index,1);
  }

  addOne(human: Person): void {
    this.people.push(human);
  }

  getOne(index: number): Person {
    return this.people[index];
  }

  getAll(): Person[] {
    return this.people.slice();
  }
  
}
