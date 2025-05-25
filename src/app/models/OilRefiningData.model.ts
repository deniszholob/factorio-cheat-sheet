import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { RatioItem } from 'app/shared/ratio/ratio.component';

export interface OilRefiningData {
  basicOil: Ratio[];
  rushAdvancedOil: RushAdvancedOil;
  simpleCrackingRatio: RatioItem[];
  perfectCrackingRatio: RatioItem[];
  moduledCrackingRatio: RatioItem[];
  simpleLiquefactionCrackingRatio: RatioItem[];
  perfectLiquefactionCrackingRatio: RatioItem[];
  moduledLiquefactionCrackingRatio: RatioItem[];
  solidFuel: Ratio[][];
  production: Production[];
}

export interface Ratio {
  iconId: FactorioIcons;
  count: number;
}

export interface RushAdvancedOil {
  [FactorioIcons.Icons_Sulfur]: number;
  [FactorioIcons.Icons_PlasticBar]: number;
  [FactorioIcons.Fluid_PetroleumGas]: number;
  [FactorioIcons.Fluid_CrudeOil]: number;
}

export interface Production {
  processes: RatioItem[];
  oil: string;
  water: string;
  petrol: string;
  lightOil: string;
  heavyOil: string;
}
