// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'basic-power';

@Component({
    selector: 'app-basic-power',
    templateUrl: './basic-power.component.html',
    // styleUrls: ['./basic-power.component.scss'] // Enable as needed
})
export class BasicPowerComponent implements OnInit {
    public cheatSheet: CheatSheet;
    public sheetData: any;

    public solarPowerRatio = 1;

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
                this.solarPowerRatio = this.sheetData.solar_energy_avg / this.sheetData.solar_energy_max;
            },
            error => {
                console.log(error);
            }
        );
    }

}
