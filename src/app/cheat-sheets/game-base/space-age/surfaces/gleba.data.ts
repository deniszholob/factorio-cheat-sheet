import { SimpleRatio } from 'app/data';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface GlebaData {
  bootstrapItems: SimpleRatio[][];
}

export const GLEBA_DATA: GlebaData = {
  bootstrapItems: [
    [
      { iconId: FactorioIcons.Icons_ConstructionRobot, count: 15 },
      { iconId: FactorioIcons.Icons_LogisticRobot, count: 75 },
      { iconId: FactorioIcons.Icons_Roboport, count: 10 },
      { iconId: FactorioIcons.Icons_StorageChest, count: 20 },
      { iconId: FactorioIcons.Icons_RequesterChest, count: 30 },
      { iconId: FactorioIcons.Icons_PassiveProviderChest, count: 20 },
      { iconId: FactorioIcons.Icons_ActiveProviderChest, count: 35 },
    ],
    [
      { iconId: FactorioIcons.Icons_ChemicalPlant, count: 5 },
      { iconId: FactorioIcons.Icons_SteelFurnace, count: 15 },
      { iconId: FactorioIcons.Icons_AssemblingMachine3, count: 10 },
    ],
    [
      { iconId: FactorioIcons.Icons_FastInserter, count: 50 },
      { iconId: FactorioIcons.Icons_ProductivityModule, count: 50 },
      { iconId: FactorioIcons.Icons_SpeedModule, count: 50 },
    ],
    [
      { iconId: FactorioIcons.Icons_Landfill, count: 200 },
      { iconId: FactorioIcons.Icons_IronPlate, count: 200 },
      { iconId: FactorioIcons.Icons_CopperPlate, count: 200 },
    ],
  ],
};
