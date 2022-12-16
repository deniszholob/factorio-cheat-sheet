// Angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
  /**
   * Takes _ and replaces with space, Capitalizes each letter.
   * @param value any string
   */
  transform(value: string): string {
    return value
      .replace(/_/g, ' ')
      .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  }
}
