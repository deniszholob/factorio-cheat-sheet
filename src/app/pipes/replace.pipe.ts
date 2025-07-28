// Angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
  /**
   * Used on FACTORIO_ICONS_INFO[entry].display
   * Display has format of "Category: Name"
   * Return only the name part
   * @param value any string
   */
  public transform(value: string): string {
    const split: string[] = value.split(':');
    const display: string | undefined = split.pop();
    const result: string = display ? display.trim() : value;
    return result;
  }
}
