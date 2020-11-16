import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchValue?: any): any {
    const output: any[] = [];
    if (!searchValue) {
      return value;
    }
    for (let i = 0; i < value.length; i++) {
      // if (JSON.stringify(value[i]).includes(searchValue)) {
      //   output.push(value[i]);
      // } else {
      //   return value;
      // }
      // for (const key in value[i]) {
      //   if (Object.prototype.hasOwnProperty.call(value[i], key)) {
      //     const element = value[i][key];
      //     console.log('element', element);
      //     console.log('searchValue', searchValue);
          if (JSON.stringify(value[i]).toLowerCase().includes(searchValue)) {
            output.push(value[i]);
          }
        // }
      // }
    }
    return output;
  }

}
