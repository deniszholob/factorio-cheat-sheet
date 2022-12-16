// Angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  private time_units = 'smhdMY';

  /**
   * Takes in format like 00:01:00 and transforms into 1m 0s
   * @param value string like 00:01:00
   */
  transform(value: string): string {
    const hms: string[] = value.split(':');
    let time = '';

    // Start display with the 1st non 0 value
    // If its 0:0:1 we just display 1s not 0h 0m 0s
    // If the number value of the string is 0, do not display
    while (+hms[0] <= 0) {
      hms.splice(0, 1);
    }

    const len =
      this.time_units.length < hms.length ? this.time_units.length : hms.length;
    for (let i = len - 1; i >= 0; i--) {
      const val = hms[i];
      const unitIdx = len - 1 - i; // access backwards since we looping backwards
      time = +val + this.time_units[unitIdx] + ' ' + time;
    }
    return time;
  }
}
