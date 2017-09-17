// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'science';

@Component({
    selector: 'app-science',
    templateUrl: './science.component.html',
    styleUrls: ['./science.component.scss'] // Enable as needed
})
export class ScienceComponent implements OnInit {
    cheatSheet: CheatSheet;
    tableData: any;

    rocketCalcData: RocketCalcData = {
        rocketRate: 0,          // This is calculated
        sciencePerLaunch: 1000, // As of v0.15 you get 1000 space science per rocket launch
        assemblerSpeed: 0.75,   // The speed at wich the other sciences are being made
        ratioMultiplier: 1,     // Multiplier for the science ratio (incase you have more sciecen set up)
    };

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.tableData = result.data;
            },
            error => {
                console.log(error);
            }
        );
        this.onCalcRocketRate();
    }

    /** Calculates the rocket launch rate (in minutes) to keep up with other sicence */
    onCalcRocketRate() {
        this.rocketCalcData.rocketRate =
            this.rocketCalcData.sciencePerLaunch /
            (this.rocketCalcData.assemblerSpeed * this.rocketCalcData.ratioMultiplier);

        this.rocketCalcData.rocketRate = this.rocketCalcData.rocketRate / 60; // Convert to minutes
    }

}

/** Defines the Rocket Data Structure */
interface RocketCalcData {
    rocketRate: number;
    sciencePerLaunch: number;
    assemblerSpeed: number;
    ratioMultiplier: number;
}
