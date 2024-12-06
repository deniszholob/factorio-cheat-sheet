// Angular Imports
import { Component, OnInit } from '@angular/core';
import {
  BELT_DATA,
  BeltInfo,
  DRILL_DATA,
  DrillData,
  ORE_DATA,
  OreData,
} from 'app/data';
// Models
import { Data } from 'app/models/Data.model';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
// RXJS
import { combineLatest } from 'rxjs';

import { MINING_DATA } from './mining.data';

interface MineTableColumn {
  name: string;
  type: 'Text' | 'FactorioIcon' | 'FactorioSaIcon';
}

interface MineTableRowGroup {
  ores: OreData[];
  mineData: MineTableRow[];
}

interface MineTableRow {
  spaceAge?: boolean;
  miner: string;
  rate: number;
  beltRates: number[];
}

const prodBonusPercent = 10;

const miningTableColumns: MineTableColumn[] = [
  { name: 'Ore', type: 'Text' },
  { name: 'Drill', type: 'Text' },
  ...BELT_DATA.beltInfo.map(
    (belt): MineTableColumn => ({
      name: belt.icons[0],
      type: belt.spaceAge ? 'FactorioSaIcon' : 'FactorioIcon',
    })
  ),
  { name: 'Mine Rate', type: 'Text' },
];

const mineTableRowGroups: Map<string, MineTableRowGroup> = new Map();
const sortedDrillData = DRILL_DATA.sort(
  (a, b) => b.miningSpeed - a.miningSpeed
);
ORE_DATA.forEach((ore: OreData) => {
  const oreKey = `${ore.miningTime}_${ore.minedWith.length}`;
  if (mineTableRowGroups.has(oreKey)) {
    mineTableRowGroups.get(oreKey)?.ores.push(ore);
  } else {
    mineTableRowGroups.set(oreKey, {
      ores: [ore],
      mineData: sortedDrillData
        .filter((drill) => ore.minedWith.includes(drill.name))
        .map((drillData: DrillData): MineTableRow => {
          const rate = drillData.miningSpeed / ore.miningTime;
          return {
            spaceAge: drillData.spaceAge,
            miner: drillData.name,
            rate,
            beltRates: BELT_DATA.beltInfo.map(
              (beltData: BeltInfo): number => beltData.throughput / rate
            ),
          };
        }),
    });
  }
});

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.scss'], // Enable as needed
})
export class MiningComponent implements OnInit {
  protected readonly APP_INFO = APP_INFO;
  protected readonly BELT_DATA = BELT_DATA;

  protected cheatSheet?: CheatSheet;

  protected miningTableColumns: MineTableColumn[] = miningTableColumns;
  protected mineTableRowGroups: MineTableRowGroup[] = [
    ...mineTableRowGroups.values(),
  ];

  protected inputMin = 0;
  protected inputStep = 1;
  protected prodBonusLevelChanged = 0;
  protected prodBonusLevel = this.prodBonusLevelChanged;
  protected productivityPercent = 0;

  constructor(protected dataService: DataService) {}

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    combineLatest([
      this.dataService.getLocalCheatSheetData<undefined>(MINING_DATA),
    ]).subscribe({
      next: ([result]: [Data<undefined>]) => {
        this.cheatSheet = result.cheatSheet;
        this.updateTable();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  /** Makes sure the value changes before running calculations
   *  Mostly for the mouse click event, since the change event is not registering the tick change until mouse moves.
   */
  protected onInputChange() {
    if (this.prodBonusLevel !== this.prodBonusLevelChanged) {
      this.prodBonusLevelChanged = this.prodBonusLevel;
      this.updateTable();
    }
  }

  private updateTable() {
    if (this.prodBonusLevel < this.inputMin) {
      this.prodBonusLevel = this.inputMin;
    }
    this.productivityPercent = this.calcProductivityPercent();
    const productivity = 1 + this.productivityPercent / 100;

    this.mineTableRowGroups.forEach((value: MineTableRowGroup) => {
      value.mineData.forEach((row: MineTableRow) => {
        row.beltRates = BELT_DATA.beltInfo.map(
          (beltData: BeltInfo): number =>
            beltData.throughput / (row.rate * productivity)
        );
      });
    });
  }
  private calcProductivityPercent(): number {
    return (prodBonusPercent ?? 1) * this.prodBonusLevel;
  }
}
