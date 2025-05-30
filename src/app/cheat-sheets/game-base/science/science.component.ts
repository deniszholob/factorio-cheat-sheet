// Angular Imports
import { Component, OnInit } from '@angular/core';
// Models
import { Data } from 'app/models/Data.model';
import { ScienceData } from 'app/models/ScienceData.model';
// Services
import { DataService } from 'app/services/data.service';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

// Constants
import { SCIENCE_DATA } from './science.data';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss'], // Enable as needed
})
export class ScienceComponent implements OnInit {
  protected readonly FactorioIcons = FactorioIcons;
  public cheatSheet?: CheatSheet;
  public sheetData?: ScienceData;

  public scienceRequirementsLink: string;

  rocketCalcData: RocketCalcData = {
    rocketRate: 0, // This is calculated
    sciencePerLaunch: 1000, // As of v0.15 you get 1000 space science per rocket launch
    assemblerSpeed: 0.75, // The speed at which the other sciences are being made
    ratioMultiplier: 1, // Multiplier for the science ratio (incase you have more science set up)
  };

  calcScience: LabsCalc = {
    labsRequired: 1,
    packsPerMinute: 1000,
    researchCycleTime: 60,
    labSpeedBonus: 2245,
  };

  constructor(public dataService: DataService) {
    // tslint:disable-next-line:max-line-length
    this.scienceRequirementsLink =
      'https://kirkmcdonald.github.io/calc.html#zip=bY1BCsMwDAR/k5MMdWhqMPgxQlFbUcsOtnzo79Mem/S27LCzKxqmi/PB+UmlpHkSY+0Jh1VFk1pcJ+FC7DakV7zHBXJ9SDehI7mBShbD9j5v6MkqhPlI/Axbq+ugf1cBhn2NJ1+A/kn8W7d4XXY=';
  }

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<ScienceData>(SCIENCE_DATA)
      .subscribe(
        (result: Data<ScienceData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
        },
        (error) => {
          console.log(error);
        }
      );
    this.onCalcRocketRate();
    this.calcScienceNumberOfLabs();
  }

  /** Calculates the rocket launch rate (in minutes) to keep up with other science */
  onCalcRocketRate() {
    this.rocketCalcData.rocketRate =
      this.rocketCalcData.sciencePerLaunch /
      (this.rocketCalcData.assemblerSpeed *
        this.rocketCalcData.ratioMultiplier);

    this.rocketCalcData.rocketRate = this.rocketCalcData.rocketRate / 60; // Convert to minutes
  }

  calcScienceNumberOfLabs() {
    this.calcScience.labsRequired =
      (this.calcScience.packsPerMinute / 60) *
      (this.calcScience.researchCycleTime /
        (1 + this.calcScience.labSpeedBonus / 100));
    this.calcScience.labsRequired = this.calcScience.labsRequired.toFixed(2);
  }
}

/** Defines the Rocket Data Structure */
interface RocketCalcData {
  rocketRate: number;
  sciencePerLaunch: number;
  assemblerSpeed: number;
  ratioMultiplier: number;
}

interface LabsCalc {
  labsRequired: number | string;
  packsPerMinute: number;
  researchCycleTime: number;
  labSpeedBonus: number;
}
