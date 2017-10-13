// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
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
