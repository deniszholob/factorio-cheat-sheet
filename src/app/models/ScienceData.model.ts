export interface ScienceData {
  packs: Pack[];
  assembler2: Rate;
  assembler3: Rate;
  space2: Rate;
  space3: Rate;
}

export interface Pack {
  iconId: string;
  count: number;
}

export interface Rate {
  iconId: string;
  speed: string;
}
