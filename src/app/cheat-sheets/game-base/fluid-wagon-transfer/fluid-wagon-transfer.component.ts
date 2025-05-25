// Angular Imports
import { Component, OnInit } from '@angular/core';
// Models
import { Data } from 'app/models/Data.model';
import { FluidWagonTransferData } from 'app/models/FluidWagonTransferData.model';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { FLUID_WAGON_TRANSFER_DATA } from './fluid-wagon-transfer.data';

@Component({
  selector: 'app-fluid-wagon-transfer',
  templateUrl: './fluid-wagon-transfer.component.html',
  // styleUrls: ['./fluid-wagon-transfer.component.scss'] // Enable as needed
})
export class FluidWagonTransferComponent implements OnInit {
  protected readonly APP_INFO = APP_INFO;
  protected readonly FactorioIcons = FactorioIcons;

  protected cheatSheet?: CheatSheet;
  protected sheetData?: FluidWagonTransferData;

  protected theoreticalTransferTimes: {
    pumps: number;
    transferTime: number;
  }[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<FluidWagonTransferData>(FLUID_WAGON_TRANSFER_DATA)
      .subscribe(
        (result: Data<FluidWagonTransferData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
          this.calcLoadingTimes();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private calcLoadingTimes() {
    const pumpRate = this.sheetData?.pumpRate ?? 1;
    const fluidWagonSize = this.sheetData?.fluidWagonSize ?? 1;
    this.theoreticalTransferTimes.length = 0; // Clear the array
    for (let i = 1; i <= 3; i++) {
      const transferTime = fluidWagonSize / (pumpRate * i);
      this.theoreticalTransferTimes.push({
        pumps: i,
        transferTime: transferTime,
      });
    }
  }
}
