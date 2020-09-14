import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from '../cat.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {
  cat: Cat;
  i: number;
  catEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private catService: CatService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.i = params.id;
      this.cat = this.catService.getCat(this.i);
    })
    this.catEditForm = new FormGroup({
      breed: new FormControl(this.cat.breed),
      firstname: new FormControl(this.cat.firstname),
      picture: new FormControl(this.cat.picture)
    })
  }

  onSubmit() {
    this.catService.editCat(this.catEditForm.value, this.i);
    this.router.navigateByUrl("/cat")
  }

}
