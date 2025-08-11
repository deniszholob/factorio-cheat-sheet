import { RawData } from 'app/models/Data.model';
import { FluidWagonTransferData } from 'app/models/FluidWagonTransferData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const FLUID_WAGON_TRANSFER_SHEET_NAV: NavData = newNavData(
  'Fluid Wagon Transfer',
  FactorioIcons.Icons_FluidWagon
);

export const FLUID_WAGON_TRANSFER_DATA: RawData<FluidWagonTransferData> = {
  cheatSheet: {
    title: FLUID_WAGON_TRANSFER_SHEET_NAV.title,
    iconId: FLUID_WAGON_TRANSFER_SHEET_NAV.sheetIconId,
  },
  data: {
    pumpRate: 1200,
    offshorePumpRate: 1200,
    storageTankSize: 25000,
    fluidWagonSize: 50000,
    pipelineLimit: 320,
  },
};
