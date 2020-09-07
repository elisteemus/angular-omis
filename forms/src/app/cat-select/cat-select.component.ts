import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { CatSelectService } from './cat-select.service';

@Component({
  selector: 'app-cat-select',
  templateUrl: './cat-select.component.html',
  styleUrls: ['./cat-select.component.css']
})
export class CatSelectComponent implements OnInit {
  selectedCats: Cat[];

  constructor(private catSelectService: CatSelectService) { }

  ngOnInit(): void {
    this.selectedCats = this.catSelectService.getCats();
  }

}
