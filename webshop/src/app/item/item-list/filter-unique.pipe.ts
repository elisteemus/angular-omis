import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item.model';

@Pipe({
  name: 'filterUnique'
})
export class FilterUniquePipe implements PipeTransform {

  transform(value: Item[]): Item[] {
    let uniqueArray = value.filter(function (el, index, array) { 
      return (array.map(arrayEl => arrayEl.category))
      .indexOf (el.category) == index;
    });
    return uniqueArray;
  };

}
