import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cats = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.cats = this.catService.getCats();
  }

  onSubmit(contactForm) {
    console.log(contactForm.value);
    let cat = contactForm.value;
    console.log(cat);
    console.log(this.cats);
    // this.cats.push(cat);
    this.catService.addCat(cat);
    this.cats = this.catService.getCats();
    console.log(this.cats);
  }

}
