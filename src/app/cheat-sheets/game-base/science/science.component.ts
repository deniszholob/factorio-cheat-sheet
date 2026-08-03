// Angular Imports
import { Component, OnInit } from '@angular/core';
// Models
import { Data } from 'app/models/Data.model';
import { Factory, ScienceData } from 'app/models/ScienceData.model';
// Services
import { DataService } from 'app/services/data.service';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

// Constants
import {
  calculateMinimalMachines,
  SCIENCE_DATA,
  SCIENCE_PACK_DATA_ALL,
  SciencePackData,
  SciencePackFactoryRequirement,
} from './science.data';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss'], // Enable as needed
})
export class ScienceComponent implements OnInit {
  protected readonly FactorioIcons = FactorioIcons;
  protected cheatSheet?: CheatSheet;
  protected sheetData?: ScienceData;

  protected scienceRequirementsLink: string;

  protected rocketCalcData: RocketCalcData = {
    rocketRate: 0, // This is calculated
    sciencePerLaunch: 1000, // As of v0.15 you get 1000 space science per rocket launch
    assemblerSpeed: 0.75, // The speed at which the other sciences are being made
    ratioMultiplier: 1, // Multiplier for the science ratio (incase you have more science set up)
  };

  protected SCIENCE_PACK_RATES_TO_TRY: number[] = [
    60, 75, 120, 150, 240, 600, 1000, 1200,
  ];
  protected calcScience: LabsCalc = {
    labsRequired: 1,
    packsPerMinute: 150,
    researchCycleTime: 60,
    labSpeed: 3.5,
    labProductivityBonusPercent: 8,
    drainMultiplier: 1,
  };
  // protected readonly SCIENCE_PACK_FACTORY_RATIOS_VANILLA: SciencePackFactoryRequirement[] =
  //   calculateMinimalMachines(SCIENCE_PACK_DATA_VANILLA_NO_SPACE);
  protected sciencePackData: SciencePackData[] = SCIENCE_PACK_DATA_ALL.map(
    (d: SciencePackData): SciencePackData => ({
      ...d,
      factory: {
        ...d.factory,
        productivityBonusPercent: d.factory.productivityBonusPercent ?? 0,
      },
    })
  );
  protected sciencePackRatios = calculateMinimalMachines(this.sciencePackData);
  protected SCIENCE_PACK_FACTORY_RATIOS_TARGET_RATE: SciencePackFactoryRequirement[] =
    this.sciencePackRatios.map((d) => ({
      ...d,
    }));

  constructor(public dataService: DataService) {
    // tslint:disable-next-line:max-line-length
    this.scienceRequirementsLink =
      'https://kirkmcdonald.github.io/calc.html#zip=bY1BCsMwDAR/k5MMdWhqMPgxQlFbUcsOtnzo79Mem/S27LCzKxqmi/PB+UmlpHkSY+0Jh1VFk1pcJ+FC7DakV7zHBXJ9SDehI7mBShbD9j5v6MkqhPlI/Axbq+ugf1cBhn2NJ1+A/kn8W7d4XXY=';
  }

  protected onUpdateSciencePackFactory() {
    console.log(`onUpdateSciencePackFactory`);
    this.sciencePackRatios = calculateMinimalMachines(this.sciencePackData);
    this.SCIENCE_PACK_FACTORY_RATIOS_TARGET_RATE = this.sciencePackRatios.map(
      (d) => ({
        ...d,
      })
    );

    this.calcScienceNumberOfLabs();
  }

  /** Get Data for the Cheat Sheet from the DataService */
  public ngOnInit() {
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

  protected onChangePacksPerMinute(value: number): void {
    this.calcScience.packsPerMinute = value;
    this.calcScienceNumberOfLabs();
  }

  /** TODO: remove undefined */
  protected onSetLabPreset(lab: Factory | undefined): void {
    if (!lab) throw new Error(`No lab data provided`);
    this.calcScience.labSpeed = lab.speed;
    this.calcScience.labProductivityBonusPercent = lab.prodBonusPercent;
    this.calcScience.drainMultiplier = lab.drainMultiplier;
    this.calcScienceNumberOfLabs();
  }

  /** Calculates the rocket launch rate (in minutes) to keep up with other science */
  protected onCalcRocketRate() {
    this.rocketCalcData.rocketRate =
      this.rocketCalcData.sciencePerLaunch /
      (this.rocketCalcData.assemblerSpeed *
        this.rocketCalcData.ratioMultiplier);

    this.rocketCalcData.rocketRate = this.rocketCalcData.rocketRate / 60; // Convert to minutes
  }

  protected calcScienceNumberOfLabs() {
    const packsPerSecond =
      (this.calcScience.packsPerMinute * this.calcScience.drainMultiplier) / 60;
    const prodMultiplier =
      1 + this.calcScience.labProductivityBonusPercent / 100;
    const speedMultiplier = this.calcScience.labSpeed;
    const effectiveSpeed = speedMultiplier * prodMultiplier;
    this.calcScience.labsRequired =
      packsPerSecond * (this.calcScience.researchCycleTime / effectiveSpeed);

    // this.calcScience.labsRequired =
    //   packsPerSecond *
    //   (this.calcScience.researchCycleTime /
    //     (1 + this.calcScience.labSpeed / 100));
    this.calcScience.labsRequired = this.calcScience.labsRequired.toFixed(2);

    this.SCIENCE_PACK_FACTORY_RATIOS_TARGET_RATE =
      this.SCIENCE_PACK_FACTORY_RATIOS_TARGET_RATE.map((d) => ({
        ...d,
        machinesNeeded: packsPerSecond / d.effectiveRate,
      }));
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
  labSpeed: number;
  labProductivityBonusPercent: number;
  drainMultiplier: number;
}
