// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
import { BELTS_DATA } from './belts.data';
import { BeltsData } from 'app/models/BeltsData.model';

@Component({
    selector: 'app-belts',
    templateUrl: './belts.component.html',
    // styleUrls: ['./belts.component.scss'] // Enable as needed
})
export class BeltsComponent implements OnInit {
    public cheatSheet: CheatSheet;
    public sheetData: BeltsData;

    public APP_SETTINGS = APP_SETTINGS;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.getLocalCheatSheetData<BeltsData>(BELTS_DATA).subscribe(
            (result: Data<BeltsData>) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
