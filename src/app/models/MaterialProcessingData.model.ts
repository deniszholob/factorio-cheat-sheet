import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface MaterialProcessingData {
  beltEmpty: Belt[];
  beltFill: Belt[];
}

export interface Belt {
  processorIconId: FactorioIcons[];
  materialIconId: FactorioIcons[];
  beltYellow: number;
  beltRed: number;
  beltBlue: number;
  beltGreen: number;
}
