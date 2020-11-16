import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], columnName?: any, orderType?: any): any {
    const output: any[] = [];
    // for (let i = 0; i < value.length; i++) {

    return value.sort((a, b) => {
      // console.log('a', a.name);
      // console.log('b', b.name);
      // console.log('a b.value[i]', a.columnName - b.columnName);
      // console.log('a', a);
      if (orderType === 'asc') {
        // console.log('type', typeof a[columnName]);
        // console.log('type', typeof columnName);
        console.log('date', !isNaN(new Date(a[columnName]).getTime()));
        if (typeof a[columnName] === 'string') {
          return a[columnName].localeCompare(b[columnName]);
        } else if (typeof a[columnName] === 'number') {
          return a[columnName] - b[columnName];
        } else if (!isNaN(new Date(a[columnName]).getTime())) {
          return new Date(a[columnName]).getTime() - new Date(b[columnName]).getTime();
        }
      } else if (orderType === 'dsc') {
        if (typeof a[columnName] === 'string') {
          return b[columnName].localeCompare(a[columnName]);
        }
      }
    }
    );
    // return output;
    // console.log('key', value[i][key]);
    // }
    console.log('value', value);
    // return output;
  }

}
