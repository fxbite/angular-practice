import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberCommas'
})
export class NumberCommasPipe implements PipeTransform {

  transform(value: number | string): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
