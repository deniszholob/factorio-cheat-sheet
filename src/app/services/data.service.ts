// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJX
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { Data } from './data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcon } from 'app/shared/factorio-icon/factorio-icon.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const BASE_URL = './assets/data/';

@Injectable()
export class DataService {

    constructor(
        private httpClientService: HttpClient
    ) { }


    GET<T>(endpoint: string): Observable<T> {
        const url = BASE_URL + endpoint + '.json';
        return this.httpClientService.get<T>(url);
    }

    getCheatSheetData(endpoint: string): Observable<Data> {
        return this.GET<any>(endpoint).pipe(
            map((response: any) => {
                return new Data(this.getCheatSheet(response.cheatSheet), response.data);
            })
        );
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    getFactorioIcon(iconId, text = null, name = null): FactorioIcon {
        if (iconId) { // Avoid errors during runtime due to data not being loaded yet.
            if (typeof iconId !== 'string') {
                throw new Error('Icon ID: "' + iconId + '" is not a string.');
            }
            const src = this.getFactorioIconSrc(iconId);
            name = name || this.toTitleCase(iconId.replace(/_/g, ' ')); // If custom name is passed use it, otherwise generate from id
            return new FactorioIcon(src, text, name);
        }
        return null;
    }

    /** Returns CheatSheet Object with icon and title */
    private getCheatSheet(cheatSheet): CheatSheet {
        return new CheatSheet(this.getFactorioIcon(cheatSheet.icon), cheatSheet.title);
    }

    private getFactorioIconSrc(iconId): string {
        if (iconId.includes('research')) {
            // iconId = iconId.replace(/_/g, '-');
            return APP_SETTINGS.links.wikiImagesBase + 'thumb/' + iconId + '.png/32px-' + iconId + '.png';
        }
        return APP_SETTINGS.links.wikiImagesBase + iconId + '.png';
    }
}
