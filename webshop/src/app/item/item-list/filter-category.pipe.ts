import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item.model';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(itemArray: Item[], category: string): Item[] {
    if (category=="all") {
      return itemArray;
    }
    return itemArray.filter(item => item.category.indexOf("headphones")===0);
  }

}
