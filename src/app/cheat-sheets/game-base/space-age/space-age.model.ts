import { Ratio } from '../cs-common-ratios/ratio.model';

export interface SpaceAgeData {
  solarEnergyUnit: string;
  vulcanusSolarRatioPower: number;
  vulcanusSolarRatio: SimpleRatio[];
  yellowAmmoRatio: Ratio;
}

export interface SimpleRatio {
  iconId: string;
  count: number;
}
