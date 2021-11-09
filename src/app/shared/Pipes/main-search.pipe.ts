import { Pipe, PipeTransform } from '@angular/core';
import { Lot } from '../interfaces';

@Pipe({
  name: 'mainSearch'
})
export class MainSearchPipe implements PipeTransform {

  transform(lots: Lot[], search = ''): Lot[] {
    // if (search === '') return lots
    return lots.filter(lots => {
      return lots.name.toLowerCase().includes(search.toLowerCase().trim())
    })
  }

}
