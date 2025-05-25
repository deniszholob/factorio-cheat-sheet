import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface InserterThroughputData {
  throughputNoBonus: ThroughputBonus[];
  throughputBonus2: ThroughputBonus[];
  throughputMaxBonus: ThroughputBonus[];
}

export interface ThroughputBonus {
  icons: FactorioIcons[];
  stackSize: number;
  chestToChest: number;
  chestToYellowBelt: number;
  chestToRedBelt: number;
  chestToBlueBelt: number;
}
