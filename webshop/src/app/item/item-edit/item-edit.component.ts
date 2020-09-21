import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  editItemForm;
  item: Item;
  id: number;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.itemId;
    })
    this.item = this.itemService.getItem(this.id);
    this.editItemForm = new FormGroup({
      imgSrc: new FormControl(this.item.imgSrc),
      title: new FormControl(this.item.title),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category)
    })
  }

  onSubmit(){
    this.itemService.editItem(this.editItemForm.value, this.id);
    this.router.navigateByUrl("/");
  }
}