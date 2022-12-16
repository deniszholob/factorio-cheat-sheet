export interface OilRefiningData {
  basicOil: Ratio[];
  rushAdvancedOil: RushAdvancedOil;
  simpleCrackingRatio: Ratio[];
  perfectCrackingRatio: Ratio[];
  moduledCrackingRatio: Ratio[];
  simpleLiquefactionCrackingRatio: Ratio[];
  perfectLiquefactionCrackingRatio: Ratio[];
  moduledLiquefactionCrackingRatio: Ratio[];
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
  processes: Ratio[];
  oil: string;
  water: string;
  petrol: string;
  lightOil: string;
  heavyOil: string;
}
