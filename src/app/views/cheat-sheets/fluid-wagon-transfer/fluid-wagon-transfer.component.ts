// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const dataFile = 'fluid-wagon-transfer';

@Component({
    selector: 'app-fluid-wagon-transfer',
    templateUrl: './fluid-wagon-transfer.component.html',
    // styleUrls: ['./fluid-wagon-transfer.component.scss'] // Enable as needed
})
export class FluidWagonTransferComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: any;

    APP_SETTINGS = APP_SETTINGS;

    constructor(
        public dataService: DataService
    ) { }

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
