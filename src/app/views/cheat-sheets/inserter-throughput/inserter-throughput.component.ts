// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const dataFile = 'inserter-throughput';

@Component({
    selector: 'app-inserter-throughput',
    templateUrl: './inserter-throughput.component.html',
    // styleUrls: ['./inserter-throughput.component.scss']
})
export class InserterThroughputComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: any;

    APP_SETTINGS = APP_SETTINGS;

    bonusLevel: number;
    bonusLevels: number[] = [7, 2, 0];

    tableData: any;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.bonusLevel = 7; // Default Value
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
                this.updateTable();
            },
            error => {
                console.log(error);
            }
        );
    }

    updateTable() {
        if (this.bonusLevel === 0) {
            this.tableData = this.sheetData.throughputNoBonus;
        }
        if (this.bonusLevel === 2) {
            this.tableData = this.sheetData.throughputBonus2;
        }
        if (this.bonusLevel === 7) {
            this.tableData = this.sheetData.throughputMaxBonus;
        }
    }
}
