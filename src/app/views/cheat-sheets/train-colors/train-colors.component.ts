// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'train-colors';

@Component({
    selector: 'app-train-colors',
    templateUrl: './train-colors.component.html',
    // styleUrls: ['./train-colors.component.scss'] // Enable as needed
})
export class TrainColorsComponent implements OnInit {
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

    getColorStyle(rgb: number[]) {
        return { 'background-color': 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')' };
    }

}
