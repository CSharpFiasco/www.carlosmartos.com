import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgb'
})
export class RgbPipe implements PipeTransform {

  transform(values: readonly [number, number, number]): string {
    return `rgb(${values.join(', ')})`;
  }

}
