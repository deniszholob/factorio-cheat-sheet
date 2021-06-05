// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/definitions/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { OilRefiningData } from 'app/definitions/OilRefiningData.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
import { OIL_REFINING_DATA } from './oil-refining.data';

@Component({
    selector: 'app-oil-refining',
    templateUrl: './oil-refining.component.html',
    // styleUrls: ['./oil-refining.component.scss'] // Enable as needed
})
export class OilRefiningComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: OilRefiningData;

    APP_SETTINGS = APP_SETTINGS;

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        this.dataService.getLocalCheatSheetData<OilRefiningData>(OIL_REFINING_DATA).subscribe(
            (result: Data<OilRefiningData>) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
