import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { DrillTypes } from './drill.data';

export interface OreData {
  spaceAge?: boolean;
  iconId: FactorioIcons;
  miningTime: number;
  minedWith: DrillTypes[];
}

export const ORE_DATA: OreData[] = [
  {
    iconId: FactorioIcons.Icons_CopperOre,
    miningTime: 1,
    minedWith: [
      FactorioIcons.Icons_BurnerMiningDrill,
      FactorioIcons.Icons_ElectricMiningDrill,
      FactorioIcons.Icons_BigMiningDrill,
    ],
  },
  {
    iconId: FactorioIcons.Icons_IronOre,
    miningTime: 1,
    minedWith: [
      FactorioIcons.Icons_BurnerMiningDrill,
      FactorioIcons.Icons_ElectricMiningDrill,
      FactorioIcons.Icons_BigMiningDrill,
    ],
  },
  {
    iconId: FactorioIcons.Icons_Coal,
    miningTime: 1,
    minedWith: [
      FactorioIcons.Icons_BurnerMiningDrill,
      FactorioIcons.Icons_ElectricMiningDrill,
      FactorioIcons.Icons_BigMiningDrill,
    ],
  },
  {
    iconId: FactorioIcons.Icons_Stone,
    miningTime: 1,
    minedWith: [
      FactorioIcons.Icons_BurnerMiningDrill,
      FactorioIcons.Icons_ElectricMiningDrill,
      FactorioIcons.Icons_BigMiningDrill,
    ],
  },
  {
    iconId: FactorioIcons.Icons_UraniumOre,
    miningTime: 2,
    minedWith: [
      FactorioIcons.Icons_ElectricMiningDrill,
      FactorioIcons.Icons_BigMiningDrill,
    ],
  },
  {
    iconId: FactorioIcons.Icons_Scrap,
    miningTime: 0.5,
    minedWith: [
      FactorioIcons.Icons_BurnerMiningDrill,
      FactorioIcons.Icons_ElectricMiningDrill,
      FactorioIcons.Icons_BigMiningDrill,
    ],
    spaceAge: true,
  },
  {
    iconId: FactorioIcons.Icons_Calcite,
    miningTime: 1,
    minedWith: [
      FactorioIcons.Icons_BurnerMiningDrill,
      FactorioIcons.Icons_ElectricMiningDrill,
      FactorioIcons.Icons_BigMiningDrill,
    ],
    spaceAge: true,
  },
  {
    iconId: FactorioIcons.Icons_TungstenOre,
    miningTime: 5,
    minedWith: [FactorioIcons.Icons_BigMiningDrill],
    spaceAge: true,
  },
];
