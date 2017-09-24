// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const cheatSheet = {
    title: 'Tips',
    icon: 'Steel_axe'
};

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    styleUrls: ['./tips.component.scss'] // Enable as needed
})
export class TipsComponent implements OnInit {
    APP_SETTINGS = APP_SETTINGS;
    cheatSheet: CheatSheet;

    calcMachines: TroughputCalc = {
        machinesToFillBelt: 1,
        beltThroughput: 40,
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
        console.log(this.calcMachines);
        this.calcMachinesTofillBelt();
    }

    calcMachinesTofillBelt() {
        this.calcMachines.machinesToFillBelt =
            (this.calcMachines.beltThroughput * this.calcMachines.recipeBaseCraftTime) /
            (this.calcMachines.itemsPerCraft * this.calcMachines.machineCraftSpeed * this.calcMachines.machineProductivity);
        this.calcMachines.machinesToFillBelt = this.calcMachines.machinesToFillBelt.toFixed(2);
    }

}

interface TroughputCalc {
    machinesToFillBelt: any;
    beltThroughput: number;
    recipeBaseCraftTime: number;
    itemsPerCraft: number;
    machineCraftSpeed: number;
    machineProductivity: number;
}
