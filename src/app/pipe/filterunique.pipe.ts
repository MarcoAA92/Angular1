import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterunique',
  pure:false
})
export class FilteruniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const uniqueArray = _.uniqBy(value, 'category');
    return uniqueArray;
  }
}
