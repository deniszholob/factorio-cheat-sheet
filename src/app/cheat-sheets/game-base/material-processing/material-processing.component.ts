// Angular Imports
import { Component, OnInit } from '@angular/core';
import {
  BELT_DATA,
  BeltInfo,
  BURNABLES_DATA,
  FurnaceData,
  FURNACES_DATA,
} from 'app/data';
// Models
import { Data } from 'app/models/Data.model';
import { MaterialProcessingData } from 'app/models/MaterialProcessingData.model';
// Services
import { DataService } from 'app/services/data.service';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
// Constants
import { FactorioIconData } from 'app/shared/factorio-icon/factorio-icon.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { MATERIAL_PROCESSING_DATA } from './material-processing.data';

interface CoalFurnaceTableColumn {
  text?: string;
  icon?: FactorioIconData;
}

interface CoalFurnaceTableRow {
  furnaceTypes: FactorioIconData[];
  furnaceCounts: number[];
}

const coalFurnaceTableColumns: CoalFurnaceTableColumn[] = [
  { icon: { iconId: FactorioIcons.Icons_Coal } },
  ...BELT_DATA.beltInfo.map(
    (belt: BeltInfo): CoalFurnaceTableColumn => ({
      icon: { iconId: belt.iconId, spaceAge: belt.spaceAge },
    })
  ),
];

const groupedCoalFurnaceTableRows: Map<number, CoalFurnaceTableRow> = new Map();
FURNACES_DATA.forEach((furnace: FurnaceData) => {
  if (!groupedCoalFurnaceTableRows.has(furnace.energyConsumptionKw)) {
    groupedCoalFurnaceTableRows.set(furnace.energyConsumptionKw, {
      furnaceTypes: [],
      furnaceCounts: BELT_DATA.beltInfo.map((belt: BeltInfo): number =>
        calcFurnaceCount(belt.throughput, furnace.energyConsumptionKw)
      ),
    });
  }
  groupedCoalFurnaceTableRows
    .get(furnace.energyConsumptionKw)
    ?.furnaceTypes.push({
      iconId: furnace.iconId,
      spaceAge: furnace.spaceAge,
    });
});

function calcFurnaceCount(beltThroughput: number, energyConsumptionKw: number) {
  const energyConsumptionMw = energyConsumptionKw / 1000;
  const coalFuelEnergyMj =
    BURNABLES_DATA.find(
      (burnable) => burnable.iconId === FactorioIcons.Icons_Coal
    )?.fuelEnergyMj || 0;

  return Math.ceil(beltThroughput / (energyConsumptionMw / coalFuelEnergyMj));
}

@Component({
  selector: 'app-material-processing',
  templateUrl: './material-processing.component.html',
  styleUrls: ['./material-processing.component.scss'], // Enable as needed
})
export class MaterialProcessingComponent implements OnInit {
  protected cheatSheet?: CheatSheet;
  protected sheetData?: MaterialProcessingData;
  protected readonly FactorioIcons = FactorioIcons;

  protected coalFurnaceTableColumns: CoalFurnaceTableColumn[] =
    coalFurnaceTableColumns;
  protected coalFurnaceTableRows: CoalFurnaceTableRow[] = [
    ...groupedCoalFurnaceTableRows.values(),
  ];

  constructor(public dataService: DataService) {}

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<MaterialProcessingData>(MATERIAL_PROCESSING_DATA)
      .subscribe({
        next: (result: Data<MaterialProcessingData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
