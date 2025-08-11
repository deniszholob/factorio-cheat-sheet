import { CargoWagonTransferData } from 'app/models/CargoWagonTransferData.model';
import { RawData } from 'app/models/Data.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const CARGO_WAGON_TRANSFER_SHEET_NAV: NavData = newNavData(
  'Cargo Wagon Transfer',
  FactorioIcons.Icons_CargoWagon
);

export const CARGO_WAGON_TRANSFER_DATA: RawData<CargoWagonTransferData> = {
  cheatSheet: {
    title: CARGO_WAGON_TRANSFER_SHEET_NAV.title,
    iconId: CARGO_WAGON_TRANSFER_SHEET_NAV.sheetIconId,
  },
  data: {
    cargoSlots: 40,
    inserterCount: 6,
    inserterCyclesPerSecC2C: {
      burner_inserter: 0.6,
      inserter: 0.83,
      long_handed_inserter: 1.2,
      fast_inserter: 2.31,
      filter_inserter: 2.31,
      stack_inserter: 2.31,
      stack_filter_inserter: 2.31,
    },
  },
};
