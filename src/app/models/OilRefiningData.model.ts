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
  iconId: string;
  count: number;
}

export interface RushAdvancedOil {
  Sulfur: number;
  Plastic_bar: number;
  Petroleum_gas: number;
  Crude_oil: number;
}

export interface Production {
  processes: RatioItem[];
  oil: string;
  water: string;
  petrol: string;
  lightOil: string;
  heavyOil: string;
}
