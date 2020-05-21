// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { TrainColorsData, TrainColor } from 'app/definitions/TrainColors';

// Constants
const dataFile = 'train-colors';

@Component({
    selector: 'app-train-colors',
    templateUrl: './train-colors.component.html',
    // styleUrls: ['./train-colors.component.scss'] // Enable as needed
})
export class TrainColorsComponent implements OnInit {
    public cheatSheet: CheatSheet;
    private sheetData: TrainColorsData;
    public displayedData: TrainColor[];

    constructor(
        public dataService: DataService,
    ) { }

    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
                this.filter('');
            },
            error => {
                console.log(error);
            }
        );
    }

    public getColorStyle(rgb: number[]) {
        return { 'background-color': 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')' };
    }

    public filter(value: string): void {
        this.displayedData = this.sheetData.trainColors.filter((color: TrainColor) => {
            const val = value.toLowerCase();
            return color.type.toLowerCase().includes(val) ||
                color.rgb[0].toString().includes(val) ||
                color.rgb[1].toString().includes(val) ||
                color.rgb[2].toString().includes(val);
        });
    }

}
