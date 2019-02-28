// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

// Constants
const dataFile = 'mining';

@Component({
    selector: 'app-mining',
    templateUrl: './mining.component.html',
    styleUrls: ['./mining.component.scss'] // Enable as needed
})
export class MiningComponent implements OnInit {
    public APP_SETTINGS = APP_SETTINGS;
    public cheatSheet: CheatSheet;
    public sheetData: any;

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
