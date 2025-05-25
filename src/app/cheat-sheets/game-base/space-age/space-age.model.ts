import { SimpleRatio } from 'app/data';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { Ratio } from '../cs-common-ratios/ratio.model';

export interface SpaceAgeData {
  solarEnergyUnit: string;
  vulcanusSolarRatioPower: number;
  vulcanusSolarRatio: SimpleRatio[];
  yellowAmmoRatio: Ratio;
  bootstrapItemsVulcanus: SimpleRatio[][];
  bootstrapItemsFulgora: SimpleRatio[][];
  bootstrapItemsGleba: SimpleRatio[][];
  recyclerScrapRatio: SimpleRatio[];
  basicResourceConversionIcons: FactorioIcons[][][];
}
