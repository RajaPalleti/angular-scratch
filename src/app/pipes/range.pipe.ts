import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any[], min?: any, max?: any): any {
    let output: any[] = [];
    if (min === undefined || max === undefined) {
      output = value;
    }
    for (let i = 0; i < value.length; i++) {
      // console.log('min', min);
      // console.log('max', max);
      if (value[i].salary >= min && value[i].salary <= max) {
        output.push(value[i]);
      }
    }
    return output;
  }

}
