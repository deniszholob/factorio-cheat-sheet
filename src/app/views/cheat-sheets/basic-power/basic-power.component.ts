// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/definitions/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { BasicPowerData } from 'app/definitions/BasicPowerData.model';

// Constants
import { BASIC_POWER_DATA } from './basic-power.data';

@Component({
    selector: 'app-basic-power',
    templateUrl: './basic-power.component.html',
    // styleUrls: ['./basic-power.component.scss'] // Enable as needed
})
export class BasicPowerComponent implements OnInit {
    public cheatSheet: CheatSheet;
    public sheetData: BasicPowerData;

    public solarPowerRatio = 1;

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        this.dataService.getLocalCheatSheetData<BasicPowerData>(BASIC_POWER_DATA).subscribe(
            (result: Data<BasicPowerData>) => {
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
