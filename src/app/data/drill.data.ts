import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface DrillData {
  spaceAge?: boolean;
  name: DrillTypes;
  miningSpeed: number;
}

export type DrillTypes =
  | FactorioIcons.Icons_BurnerMiningDrill
  | FactorioIcons.Icons_ElectricMiningDrill
  | FactorioIcons.Icons_BigMiningDrill;

export const DRILL_DATA: DrillData[] = [
  { name: FactorioIcons.Icons_BurnerMiningDrill, miningSpeed: 0.25 },
  { name: FactorioIcons.Icons_ElectricMiningDrill, miningSpeed: 0.5 },
  {
    name: FactorioIcons.Icons_BigMiningDrill,
    miningSpeed: 2.5,
    spaceAge: true,
  },
];
