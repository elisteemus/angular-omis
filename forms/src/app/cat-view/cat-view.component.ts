import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../cat.service';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat-view',
  templateUrl: './cat-view.component.html',
  styleUrls: ['./cat-view.component.css']
})
export class CatViewComponent implements OnInit {
  cats: Cat[] = [];
  cat: Cat;
  i: number;

  constructor(private route: ActivatedRoute, private catService: CatService) { }

  ngOnInit(): void {
    this.cats = this.catService.getCats();
    this.route.params.subscribe( params =>
      this.i = params.id
    )
    this.cat = this.cats[this.i];
  }

  
    birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
    toggle = true; // start with true == shortDate
  
    get format()   {
       return this.toggle ? 'shortDate' : 'fullDate'; 
      }

    toggleFormat(): void {
      let tulemus = "";
      if (this.birthday.getFullYear()>2000) {
        tulemus = "tõene";
      } else {
        tulemus = "väär";
      }
      console.log(tulemus + " - pikk");

      let prinditav = this.birthday.getFullYear()>2500 ? "tõene" : "väär";
      console.log(prinditav + " - lühike")


       this.toggle = !this.toggle; 
      }

}
