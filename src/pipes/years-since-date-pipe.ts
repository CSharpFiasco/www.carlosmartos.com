import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsSinceDate'
})
export class YearsSinceDatePipe implements PipeTransform {

  transform(fromDate: Date): number {
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;

    return Math.round((Date.now() - fromDate.getTime()) / millisecondsInYear);
  }

}
