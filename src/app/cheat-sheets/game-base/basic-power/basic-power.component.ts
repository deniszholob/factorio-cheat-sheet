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
import { BURNABLES_DATA, BurnablesData } from './burnables.data';
import { BELT_DATA, BeltData } from '../mining/belt.data';
import { FactorioIconData } from 'app/shared/factorio-icon/factorio-icon.model';

interface BoilerTableColumn extends FactorioIconData {
  type: 'Text' | 'FactorioIcon';
}

interface BoilerTableRow extends FactorioIconData {
  boilerCounts: number[];
}

const STEAM_BOILER_ENERGY_MJ = 1.8;

@Component({
  selector: 'app-basic-power',
  templateUrl: './basic-power.component.html',
})
export class BasicPowerComponent implements OnInit {
  protected readonly STEAM_BOILER_ENERGY_MJ = STEAM_BOILER_ENERGY_MJ;
  public cheatSheet?: CheatSheet;
  public sheetData?: BasicPowerData;

  public solarPowerRatio = 0.7;
  public solarAvgMw: number = 42 / 1000; // MW

  protected boilerTableColumns: BoilerTableColumn[] = [
    { type: 'Text', name: '' },
    ...BURNABLES_DATA.map(
      (burnable: BurnablesData): BoilerTableColumn => ({
        type: 'FactorioIcon',
        spaceAge: burnable.spaceAge,
        name: burnable.name,
        text:
          burnable.fuelEnergyMj > 1000
            ? `${burnable.fuelEnergyMj / 1000}GJ`
            : `${burnable.fuelEnergyMj}MJ`,
      })
    ),
  ];

  protected boilerTableRows: BoilerTableRow[] = BELT_DATA.map(
    (belt: BeltData) => ({
      spaceAge: belt.spaceAge,
      name: belt.name,
      boilerCounts: BURNABLES_DATA.map((burnable: BurnablesData) =>
        Math.ceil(
          (belt.throughput * burnable.fuelEnergyMj) / STEAM_BOILER_ENERGY_MJ
        )
      ),
    })
  );

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
