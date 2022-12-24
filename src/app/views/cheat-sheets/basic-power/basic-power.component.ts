// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { BasicPowerData } from 'app/models/BasicPowerData.model';

// Constants
import { BASIC_POWER_DATA } from './basic-power.data';

@Component({
  selector: 'app-basic-power',
  templateUrl: './basic-power.component.html',
})
export class BasicPowerComponent implements OnInit {
  public cheatSheet?: CheatSheet;
  public sheetData?: BasicPowerData;

  public solarPowerRatio = 0.7;
  public solarAvgMw: number = 42 / 1000; // MW

  constructor(public dataService: DataService) {}

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<BasicPowerData>(BASIC_POWER_DATA)
      .subscribe(
        (result: Data<BasicPowerData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
          this.solarAvgMw = this.sheetData.solar_energy_avg / 1000;
          this.solarPowerRatio =
            this.sheetData.solar_energy_avg / this.sheetData.solar_energy_max;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
