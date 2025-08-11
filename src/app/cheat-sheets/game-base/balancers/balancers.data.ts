import { BalancerData } from 'app/models/BalancersData.model';
import { RawData } from 'app/models/Data.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const BALANCERS_SHEET_NAV: NavData = newNavData(
  'Balancers',
  FactorioIcons.Icons_FastSplitter
);

export const BALANCERS_DATA: RawData<BalancerData> = {
  cheatSheet: {
    title: BALANCERS_SHEET_NAV.title,
    iconId: BALANCERS_SHEET_NAV.sheetIconId,
  },
  data: {
    commonBalancers: [
      {
        name: '4x4 balancer',
        url: 'https://github.com/deniszholob/factorio-blueprints/blob/master/blueprint-data/bp-balancer-4x4.txt',
        raw: 'https://raw.githubusercontent.com/deniszholob/factorio-blueprints/master/blueprint-data/bp-balancer-4x4.txt',
      },
      {
        name: '4x4 balancer',
        url: 'https://github.com/deniszholob/factorio-blueprints/blob/master/blueprint-data/bp-balancer-8x8.txt',
        raw: 'https://raw.githubusercontent.com/deniszholob/factorio-blueprints/master/blueprint-data/bp-balancer-8x8.txt',
      },
    ],
  },
};
