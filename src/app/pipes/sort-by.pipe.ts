import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, direction: any): any {

  	if (direction == 'dec')
  		return value.reverse();
  	else 
  		return value.sort((a,b) => a['id'] - b['id']);

	}
}
