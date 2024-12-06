// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { MaterialProcessingData } from 'app/models/MaterialProcessingData.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { FactorioIconData } from 'app/shared/factorio-icon/factorio-icon.model';
import { BURNABLES_DATA } from '../basic-power/burnables.data';
import { BeltData, BELT_DATA } from '../mining/belt.data';
import { FurnaceData, FURNACES_DATA } from './furnaces.data';
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
  { icon: { name: 'Coal' } },
  ...BELT_DATA.map(
    (belt: BeltData): CoalFurnaceTableColumn => ({
      icon: { name: belt.name, spaceAge: belt.spaceAge },
    })
  ),
];

const groupedCoalFurnaceTableRows: Map<number, CoalFurnaceTableRow> = new Map();
FURNACES_DATA.forEach((furnace: FurnaceData) => {
  if (!groupedCoalFurnaceTableRows.has(furnace.energyConsumptionKw)) {
    groupedCoalFurnaceTableRows.set(furnace.energyConsumptionKw, {
      furnaceTypes: [],
      furnaceCounts: BELT_DATA.map((belt: BeltData): number =>
        calcFurnaceCount(belt.throughput, furnace.energyConsumptionKw)
      ),
    });
  }
  groupedCoalFurnaceTableRows
    .get(furnace.energyConsumptionKw)
    ?.furnaceTypes.push({
      name: furnace.name,
      spaceAge: furnace.spaceAge,
    });
});

function calcFurnaceCount(beltThroughput: number, energyConsumptionKw: number) {
  const energyConsumptionMw = energyConsumptionKw / 1000;
  const coalFuelEnergyMj =
    BURNABLES_DATA.find((burnable) => burnable.name === 'Coal')?.fuelEnergyMj ||
    0;

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
