import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique'
})
export class FilterUniquePipe implements PipeTransform {

  transform(value) {
    let uniqueArray = value.filter(function (el, index, array) { 
      return (array.map(arrayEl => arrayEl.category)).indexOf (el.category) == index;
    });

    return uniqueArray;
  };

}
