// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
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

    theoreticalTransferTimes = [];

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
                // this.calcLoadingTimes();
            },
            error => {
                console.log(error);
            }
        );
    }

    private calcLoadingTimes() {
        const pumpRate = this.sheetData.pumpRate;
        const fluidWagonSize = this.sheetData.fluidWagonSize;
        this.theoreticalTransferTimes.length = 0; // Clear the array
        for (let i = 1; i <= 3; i++) {
            const transferTime = fluidWagonSize / (pumpRate * i);
            this.theoreticalTransferTimes.push(
                {
                    'pumps': i,
                    'transferTime': transferTime
                }
            );
        }
    }

}
