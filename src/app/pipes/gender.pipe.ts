import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any): any {
    let output: string;
    if(value === 'Male') {
      output = 'M'
    } else if(value === 'Female') {
      output = 'F'
    } else if(value === 'Transgender') {
      output = 'T'
    }
    return output;
  }

}
