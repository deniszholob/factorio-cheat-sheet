import { Ratio } from '../cs-common-ratios/ratio.model';

export interface SpaceAgeData {
  solarEnergyUnit: string;
  vulcanusSolarRatioPower: number;
  vulcanusSolarRatio: SimpleRatio[];
  yellowAmmoRatio: Ratio;
  bootstrapItemsVulcanus: SimpleRatio[][];
  bootstrapItemsFulgora: SimpleRatio[][];
  recyclerScrapRatio: SimpleRatio[];
  baseResources: string[][][];
}

export interface SimpleRatio {
  iconId: string;
  count: number;
}
