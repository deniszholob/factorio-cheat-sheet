import { BalancerData } from 'app/models/BalancersData.model';
import { RawData } from 'app/models/Data.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const BALANCERS_DATA: RawData<BalancerData> = {
  cheatSheet: {
    title: 'Balancers',
    iconId: FactorioIcons.Icons_FastSplitter,
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
