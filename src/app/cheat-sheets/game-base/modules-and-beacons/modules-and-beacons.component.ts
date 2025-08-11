// Angular Imports
import { Component, OnInit } from '@angular/core';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
// Models
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const MODULE_AND_BEACONS_SHEET_NAV: NavData = newNavData(
  'Modules and Beacons',
  FactorioIcons.Icons_Beacon
);

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
    itemProductionRate: 15,
    recipeBaseCraftTime: 3.2,
    itemsPerCraft: 1,
    machineCraftSpeed: 9.4,
    machineProductivityBonusPercent: 20,
  };

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.cheatSheet = new CheatSheet(
      this.dataService.getFactorioIcon(
        MODULE_AND_BEACONS_SHEET_NAV.sheetIconId
      ),
      MODULE_AND_BEACONS_SHEET_NAV.title
    );
    this.calcMachinesToFillBelt();
  }

  protected calcMachinesToFillBelt(): void {
    const prodMultiplier =
      1 + this.calcMachines.machineProductivityBonusPercent / 100;
    const speedMultiplier = this.calcMachines.machineCraftSpeed;
    const effectiveSpeed = speedMultiplier * prodMultiplier;

    this.calcMachines.machinesToFillBelt =
      (this.calcMachines.itemProductionRate *
        this.calcMachines.recipeBaseCraftTime) /
      (this.calcMachines.itemsPerCraft * effectiveSpeed);

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
  machineProductivityBonusPercent: number;
}
