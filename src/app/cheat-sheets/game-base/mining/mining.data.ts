import { RawData } from 'app/models/Data.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const MINING_SHEET_NAV: NavData = newNavData(
  'Mining',
  FactorioIcons.Icons_ElectricMiningDrill
);

export const MINING_DATA: RawData<undefined> = {
  cheatSheet: {
    title: MINING_SHEET_NAV.title,
    iconId: MINING_SHEET_NAV.sheetIconId,
  },
  data: undefined,
};
