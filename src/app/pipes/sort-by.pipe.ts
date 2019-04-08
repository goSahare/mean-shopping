import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, direction: any): any {
  	return (direction == 'dec') ? value.reverse() : 
  		 value.sort((a,b) => a['price'] - b['price']);
	}
}
