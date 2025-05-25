import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface ScienceData {
  packs: Pack[];
  assembler2: Rate;
  assembler3: Rate;
  space2: Rate;
  space3: Rate;
}

export interface Pack {
  iconId: FactorioIcons;
  count: number;
}

export interface Rate {
  iconId: FactorioIcons;
  speed: string;
}
