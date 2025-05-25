import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface TrainColorsData {
  blueprint: string;
  trainColors: TrainColor[];
  trainColorsGenerated: TrainColor[];
}

export interface TrainColor {
  icon: FactorioIcons;
  rgb: number[];
  type?: string;
}
