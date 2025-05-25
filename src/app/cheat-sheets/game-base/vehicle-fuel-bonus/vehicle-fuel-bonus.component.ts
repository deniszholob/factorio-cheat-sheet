// Angular Imports
import { Component, OnInit } from '@angular/core';
// Models
import { Data } from 'app/models/Data.model';
import { VehicleFuelBonusData } from 'app/models/VehicleFuelBonusData.model';
// Services
import { DataService } from 'app/services/data.service';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

// Constants
import { VEHICLE_FUEL_BONUS_DATA } from './vehicle-fuel-bonus.data';

@Component({
  selector: 'app-vehicle-fuel-bonus',
  templateUrl: './vehicle-fuel-bonus.component.html',
  // styleUrls: ['./vehicle-fuel-bonus.component.scss'] // Enable as needed
})
export class VehicleFuelBonusComponent implements OnInit {
  protected readonly FactorioIcons = FactorioIcons;
  cheatSheet?: CheatSheet;
  sheetData?: any;

  trainSizes = [
    { idx: 1, name: '1-4-1' },
    { idx: 2, name: '1-10-1' },
  ];
  trainSizeIdx = 1;
  tableData: any;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<VehicleFuelBonusData>(VEHICLE_FUEL_BONUS_DATA)
      .subscribe(
        (result: Data<VehicleFuelBonusData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
          this.updateTable();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateTable() {
    if (this.trainSizeIdx === 1) {
      this.tableData = this.sheetData.accelerationTimes['S-1-4-1'];
    }
    if (this.trainSizeIdx === 2) {
      this.tableData = this.sheetData.accelerationTimes['S-1-10-1'];
    }
  }
}
