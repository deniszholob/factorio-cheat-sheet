// Angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ceiling' })
export class CeilingPipe implements PipeTransform {
  /**
   * Takes a decimal and rounds it up.
   * @param value any number
   */
  transform(value?: number): number {
    return value ? Math.ceil(value) : 0;
  }
}
