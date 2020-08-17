import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-view',
  templateUrl: './cat-view.component.html',
  styleUrls: ['./cat-view.component.css']
})
export class CatViewComponent implements OnInit {
  cats = [];
  cat: {breed: string, firstname: string, picture: string} =
   {breed: "", firstname: "", picture: ""};
  i: number;

  constructor(private route: ActivatedRoute, private catService: CatService) { }

  ngOnInit(): void {
    console.log(this.catService.getCats());
    this.cats = this.catService.getCats();
    this.route.params.subscribe( params =>
      this.i = params['id']
    )
    this.cat = this.cats[this.i];
    console.log(this.cat);
  }

}
