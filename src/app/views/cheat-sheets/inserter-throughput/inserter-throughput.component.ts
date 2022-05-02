// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { InserterThroughputData, ThroughputBonus } from 'app/models/InserterThroughputData.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
import { INSERTER_THROUGHPUT_DATA } from './inserter-throughput.data';

@Component({
    selector: 'app-inserter-throughput',
    templateUrl: './inserter-throughput.component.html',
    styleUrls: ['./inserter-throughput.component.scss'] // Enable as needed
})
export class InserterThroughputComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: InserterThroughputData;

    APP_SETTINGS = APP_SETTINGS;

    bonusLevel: number;
    bonusLevels: number[] = [7, 2, 0];

    tableData: ThroughputBonus[];

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.bonusLevel = 7; // Default Value
        this.dataService.getLocalCheatSheetData<InserterThroughputData>(INSERTER_THROUGHPUT_DATA).subscribe(
            (result: Data<InserterThroughputData>) => {
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
