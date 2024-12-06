// Angular
import { Injectable } from '@angular/core';
// Models
import { Data as IData, RawCheatSheet, RawData } from 'app/models/Data.model';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcon } from 'app/shared/factorio-icon/factorio-icon.model';
// RXJX
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
export const BASE_URL = './assets/data/';

@Injectable()
export class DataService {
  // constructor(
  //     private httpClientService: HttpClient
  // ) { }

  // /** @deprecated, use getLocalCheatSheetData */
  // public GET<T>(endpoint: string): Observable<T> {
  //     const url = BASE_URL + endpoint + '.json';
  //     return this.httpClientService.get<T>(url);
  // }

  // /** @deprecated, use getLocalCheatSheetData */
  // public getCheatSheetData<T>(endpoint: string): Observable<Data> {
  //     return this.GET<T>(endpoint).pipe(
  //         map((response: any) => {
  //             return new Data(this.getCheatSheet(response.cheatSheet), response.data);
  //         })
  //     );
  // }

  public getLocalCheatSheetData<T>(rawData: RawData<T>): Observable<IData<T>> {
    return of({
      cheatSheet: this.getCheatSheet(rawData.cheatSheet),
      data: rawData.data,
    }).pipe(take(1));
  }

  public toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  public getFactorioIcon(
    iconId?: string,
    text?: string | number,
    name?: string
  ): FactorioIcon {
    if (iconId) {
      // Avoid errors during runtime due to data not being loaded yet.
      if (typeof iconId !== 'string') {
        throw new Error('Icon ID: "' + iconId + '" is not a string.');
      }
      const src = this.getFactorioIconSrc(iconId);
      name = name || this.toTitleCase(iconId.replace(/_/g, ' ')); // If custom name is passed use it, otherwise generate from id
      text = typeof text == 'number' ? String(text) : text;
      return new FactorioIcon(src, text, name);
    }
    throw new Error('No Icon');
  }

  /** Returns CheatSheet Object with icon and title */
  public getCheatSheet(cheatSheet: RawCheatSheet): CheatSheet {
    return new CheatSheet(
      this.getFactorioIcon(cheatSheet.icon),
      cheatSheet.title
    );
  }

  private getFactorioIconSrc(iconId?: string): string {
    if (!iconId) {
      throw new Error('No Icon Defined');
    }
    if (iconId.includes('Assembling_machine_combined')) {
      return APP_INFO.links.getLocalImagePath(
        'Assembling_machine_combined.png'
      );
    }
    if (iconId.includes('Space_Age')) {
      return APP_INFO.links.getLocalImagePath('Space_Age.png');
    }
    if (iconId.includes('research')) {
      // iconId = iconId.replace(/_/g, '-');
      return (
        APP_INFO.links.wikiImagesBase +
        'thumb/' +
        iconId +
        '.png/32px-' +
        iconId +
        '.png'
      );
    }
    return APP_INFO.links.wikiImagesBase + iconId + '.png';
  }
}
