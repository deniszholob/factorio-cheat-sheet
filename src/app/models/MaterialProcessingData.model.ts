export interface MaterialProcessingData {
  coalConsumption: CoalConsumption[];
  beltEmpty: Belt[];
  beltFill: Belt[];
}

export interface CoalConsumption {
  belt: string;
  furnacesSupplied: number;
}

export interface Belt {
  processor: string[];
  material: string[];
  beltYellow: number;
  beltRed: number;
  beltBlue: number;
}
