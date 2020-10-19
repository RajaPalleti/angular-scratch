import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: any, arg1?: any): any {
    let grade: any;
    if (arg1 === 1) {
      grade = 'Outstanding';
    } else if (arg1 === 2) {
      grade = 'Excellent';
    } else if (arg1 === 3) {
      grade = 'Good';
    } else if (arg1 === 4) {
      grade = 'Average';
    } else if (arg1 === 5) {
      grade = 'Poor';
    } else {
      grade = 'Normal'
    }
    return grade;
  }

}
