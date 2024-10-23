import { RawData } from 'app/models/Data.model';
import { FluidWagonTransferData } from 'app/models/FluidWagonTransferData.model';

export const FLUID_WAGON_TRANSFER_DATA: RawData<FluidWagonTransferData> = {
  cheatSheet: {
    title: 'Fluid Wagon Transfer',
    icon: 'Fluid_wagon',
  },
  data: {
    pumpRate: 1200,
    offshorePumpRate: 1200,
    storageTankSize: 25000,
    fluidWagonSize: 50000
  },
};
