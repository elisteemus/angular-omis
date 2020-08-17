import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbers = [12,14,16,18,20,22,24];

  constructor() { }

  ngOnInit(): void {
  }

  onGenerate() {
    this.numbers.push(Math.floor(Math.random() * 99) + 1  );
  }

  onDelete(i: number) {
    this.numbers.splice(i, 1);
  }
}
