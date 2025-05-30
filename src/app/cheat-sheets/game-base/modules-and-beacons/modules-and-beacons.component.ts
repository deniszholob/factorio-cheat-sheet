// Angular Imports
import { Component, OnInit } from '@angular/core';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
// Models
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

const SHEET_ICON: FactorioIcons = FactorioIcons.Icons_Beacon;
const SHEET_NAME = 'Modules and Beacons';

@Component({
  selector: 'app-modules-and-beacons',
  templateUrl: './modules-and-beacons.component.html',
  styleUrls: ['./modules-and-beacons.component.scss'], // Enable as needed
})
export class ModulesAndBeaconsComponent implements OnInit {
  cheatSheet?: CheatSheet;

  protected readonly APP_INFO = APP_INFO;
  protected readonly FactorioIcons = FactorioIcons;

  calcMachines: ThroughputCalc = {
    machinesToFillBelt: 1,
    itemProductionRate: 45,
    recipeBaseCraftTime: 1,
    itemsPerCraft: 1,
    machineCraftSpeed: 0.75,
    machineProductivity: 1,
  };

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.cheatSheet = new CheatSheet(
      this.dataService.getFactorioIcon(SHEET_ICON),
      SHEET_NAME
    );
    this.calcMachinesToFillBelt();
  }

  calcMachinesToFillBelt() {
    this.calcMachines.machinesToFillBelt =
      (this.calcMachines.itemProductionRate *
        this.calcMachines.recipeBaseCraftTime) /
      (this.calcMachines.itemsPerCraft *
        this.calcMachines.machineCraftSpeed *
        this.calcMachines.machineProductivity);
    this.calcMachines.machinesToFillBelt =
      this.calcMachines.machinesToFillBelt.toFixed(2);
  }
}

interface ThroughputCalc {
  machinesToFillBelt: number | string;
  itemProductionRate: number;
  recipeBaseCraftTime: number;
  itemsPerCraft: number;
  machineCraftSpeed: number;
  machineProductivity: number;
}
