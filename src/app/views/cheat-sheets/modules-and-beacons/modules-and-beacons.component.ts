// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const cheatSheet = {
    title: 'Modules and Beacons',
    icon: 'Beacon'
};

@Component({
    selector: 'app-modules-and-beacons',
    templateUrl: './modules-and-beacons.component.html',
    styleUrls: ['./modules-and-beacons.component.scss'] // Enable as needed
})
export class ModulesAndBeaconsComponent implements OnInit {
    cheatSheet: CheatSheet;

    APP_SETTINGS = APP_SETTINGS;

    calcMachines: TroughputCalc = {
        machinesToFillBelt: 1,
        itemConsumptionRate: 40,
        recipeBaseCraftTime: 1,
        itemsPerCraft: 1,
        machineCraftSpeed: 0.75,
        machineProductivity: 1,
    };

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.cheatSheet = new CheatSheet(this.dataService.getFactorioIcon(cheatSheet.icon), cheatSheet.title);
        this.calcMachinesTofillBelt();
    }

    calcMachinesTofillBelt() {
        this.calcMachines.machinesToFillBelt =
            (this.calcMachines.itemConsumptionRate * this.calcMachines.recipeBaseCraftTime) /
            (this.calcMachines.itemsPerCraft * this.calcMachines.machineCraftSpeed * this.calcMachines.machineProductivity);
        this.calcMachines.machinesToFillBelt = this.calcMachines.machinesToFillBelt.toFixed(2);
    }

}

interface TroughputCalc {
    machinesToFillBelt: any;
    itemConsumptionRate: number;
    recipeBaseCraftTime: number;
    itemsPerCraft: number;
    machineCraftSpeed: number;
    machineProductivity: number;
}

