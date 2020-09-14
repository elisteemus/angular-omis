import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { NgForm } from '@angular/forms';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  constructor(private itemService: ItemService,
    private toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    let item = new Item(
      form.value.imgSrc,
      form.value.title,
      form.value.price,
      form.value.category
    );
    this.itemService.addItem(item);
    this.toastService.success("Ese edukalt lisatud");
  }

  

}
