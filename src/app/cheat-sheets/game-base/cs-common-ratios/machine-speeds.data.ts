import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface MachineSpeeds {
  iconId: FactorioIcons;
  speed: string;
}

export const MACHINE_SPEEDS: MachineSpeeds[] = [
  {
    iconId: FactorioIcons.Icons_AssemblingMachine1,
    speed: '0.5/s',
  },
  {
    iconId: FactorioIcons.Icons_AssemblingMachine2,
    speed: '0.75/s',
  },
  {
    iconId: FactorioIcons.Icons_AssemblingMachine3,
    speed: '1.25/s',
  },
  {
    iconId: FactorioIcons.Icons_ChemicalPlant,
    speed: '1/s',
  },
  {
    iconId: FactorioIcons.Icons_OilRefinery,
    speed: '1/s',
  },
];
