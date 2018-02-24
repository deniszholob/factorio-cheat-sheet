// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'train-speed';

@Component({
    selector: 'app-train-speed',
    templateUrl: './train-speed.component.html',
    // styleUrls: ['./train-speed.component.scss'] // Enable as needed
})
export class TrainSpeedComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: any;

    trainSizes = [
        {idx: 1, name: '1-4-1'},
        {idx: 2, name: '1-10-1'}
      ];
    trainSizeIdx = 1;
    tableData: any;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
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
        if (this.trainSizeIdx === 1) {
            this.tableData = this.sheetData.accelerationTimes['S-1-4-1'];
        }
        if (this.trainSizeIdx === 2) {
            this.tableData = this.sheetData.accelerationTimes['S-1-10-1'];
        }
    }

}
