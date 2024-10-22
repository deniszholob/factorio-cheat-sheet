// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { NuclearPowerData } from 'app/models/NuclearPowerData.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_INFO } from 'app/shared/app-settings';
import { NUCLEAR_POWER_DATA } from './nuclear-power.data';

@Component({
  selector: 'app-nuclear-power',
  templateUrl: './nuclear-power.component.html',
  styleUrls: ['./nuclear-power.component.scss'], // Enable as needed
})
export class NuclearPowerComponent implements OnInit {
  cheatSheet?: CheatSheet;
  sheetData?: NuclearPowerData;

  APP_INFO = APP_INFO;

  // Base nuke data
  nuclearData: NuclearData = <NuclearData>{};

  // Nuke ratios for various reactor numbers
  reactorTable: NukeRatioData[] = [];

  reactorInfoCountChanged = 8;
  reactorInfoCount = this.reactorInfoCountChanged;
  reactorInfoCountMax = 292;
  evenOnly = true;
  roundUp = true;

  inputStep = 1;

  constructor(public dataService: DataService) {}

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<NuclearPowerData>(NUCLEAR_POWER_DATA)
      .subscribe(
        (result: Data<NuclearPowerData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;

          this.nuclearData.waterPerPump = 1200;
          this.nuclearData.reactorPower = this.sheetData.reactorPowerMW;
          this.nuclearData.heatExchangerPower =
            this.sheetData.heatExchangerPowerMW;
          this.nuclearData.turbinePower = this.sheetData.turbinePowerMW;
          this.nuclearData.waterPerTurbine = this.sheetData.waterPerTurbine;
          this.nuclearData.storageTanksPerReactor =
            this.sheetData.storageTanksPerReactor;
          this.getNukeRatios();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /** Makes sure the value changes before running calculations
   *  Mostly for the mouse click event, since the change event is not registering the tick change until mouse moves.
   */
  inputChange() {
    if (this.reactorInfoCount !== this.reactorInfoCountChanged) {
      this.reactorInfoCountChanged = this.reactorInfoCount;
      this.getNukeRatios();
    }
  }

  /** If user toggles b/w all and even entries */
  changeInputStep() {
    this.inputStep = this.evenOnly ? 2 : 1;
  }

  /** Populates the Nuke ratios array to display */
  getNukeRatios() {
    // const reactorCount = this.reactorInfoCount;

    // Change input step
    this.changeInputStep();

    // Clear table
    this.reactorTable = [];
    this.reactorTable.push(this.calcNuke(1));

    const start = 2;
    let increment = 1;
    if (this.evenOnly) {
      increment = 2;
    }
    for (let i = start; i <= this.reactorInfoCount; i = i + increment) {
      this.reactorTable.push(this.calcNuke(i));
    }
  }

  /**
   * Calculates and returns nuclear build ratio for given number of reactors
   * @param reactors Number of reactors to calculate ratio for.
   */
  calcNuke(reactors: number): NukeRatioData {
    // Set Constants
    const reactorPower = this.nuclearData.reactorPower;
    const heatExchangerPower = this.nuclearData.heatExchangerPower;
    const turbinePower = this.nuclearData.turbinePower;
    const heatExchangersPerReactor = reactorPower / heatExchangerPower;
    const waterPerTurbine = this.nuclearData.waterPerTurbine;
    const storageTanksPerReactor = this.nuclearData.storageTanksPerReactor;
    const waterPerPump = this.nuclearData.waterPerPump;

    // Set inital data that will be calculated
    let reactorConfig = '1';
    let heatExchangers = heatExchangersPerReactor;
    let power = reactorPower;
    let powerUnit = 'MW';
    let turbines = 1;
    let pumps = 1;
    let steamTanks = 1;
    let reactorEfficiency = 1;

    // Calc data
    if (reactors % 2 === 0) {
      // Even number of reactors
      heatExchangers =
        heatExchangersPerReactor * 4 * reactors - heatExchangersPerReactor * 4;
      power = reactorPower * 4 * reactors - reactorPower * 4;
      reactorConfig = '2x' + reactors / 2;
    } else if (reactors % 2 !== 0 && reactors !== 1) {
      // Odd number of reactors
      heatExchangers =
        heatExchangersPerReactor * 4 * reactors -
        (heatExchangersPerReactor * 4 + heatExchangersPerReactor);
      power = reactorPower * 4 * reactors - (reactorPower * 4 + reactorPower);
      reactorConfig = '2x' + Math.floor(reactors / 2) + '+1';
    }
    turbines = (heatExchangers * heatExchangerPower) / turbinePower;
    pumps = turbines * (waterPerTurbine / waterPerPump);
    steamTanks = (heatExchangers / 4) * storageTanksPerReactor;

    reactorEfficiency = power / (reactors * reactorPower);
    reactorEfficiency = Math.round(reactorEfficiency * 100);

    if (power < 1000) {
      powerUnit = 'MW';
    } else if (power / 1000 < 1000) {
      power /= 1000;
      powerUnit = 'GW';
    }

    // Push data
    const data: NukeRatioData = {
      reactors: reactors,
      reactorConfig: reactorConfig,
      pumps: this.roundUp ? Math.ceil(pumps) : pumps,
      heatExchangers: heatExchangers,
      turbines: this.roundUp ? Math.ceil(turbines) : turbines,
      steamTanks: this.roundUp ? Math.ceil(steamTanks) : steamTanks,
      power: power,
      powerUnit: powerUnit,
      reactorEfficiency: reactorEfficiency,
    };
    return data;
  }
}

interface NukeRatioData {
  reactors: number;
  reactorConfig: string;
  pumps: number;
  heatExchangers: number;
  turbines: number;
  steamTanks: number;
  power: number;
  powerUnit: string;
  reactorEfficiency: number;
}

interface NuclearData {
  waterPerPump: number;
  reactorPower: number;
  heatExchangerPower: number;
  turbinePower: number;
  waterPerTurbine: number;
  storageTanksPerReactor: number;
}
