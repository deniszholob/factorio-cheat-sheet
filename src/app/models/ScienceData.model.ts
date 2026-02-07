import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface ScienceData {
  packs: Pack[];
  assembler2: Rate;
  assembler3: Rate;
  space2: Rate;
  space3: Rate;
  lab: Factory;
  bioLab: Factory;
}

export interface Pack {
  iconId: FactorioIcons;
  count: number;
}

export interface Rate {
  iconId: FactorioIcons;
  speed: string;
}

export interface Factory {
  iconId: FactorioIcons;
  speed: number;
  prodBonusPercent: number;
  drainMultiplier: number;
}
