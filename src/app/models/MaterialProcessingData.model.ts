export interface MaterialProcessingData {
  beltEmpty: Belt[];
  beltFill: Belt[];
}

export interface Belt {
  processor: string[];
  material: string[];
  beltYellow: number;
  beltRed: number;
  beltBlue: number;
  beltGreen: number;
}
