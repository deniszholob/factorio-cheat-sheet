import { SimpleRatio } from 'app/data';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface FulgoraData {
  bootstrapItems: SimpleRatio[][];
  recyclerScrapRatio: SimpleRatio[];
  basicResourceConversionIcons: FactorioIcons[][][];
}

export const FULGORA_DATA: FulgoraData = {
  bootstrapItems: [
    [
      { iconId: FactorioIcons.Icons_ConstructionRobot, count: 20 },
      { iconId: FactorioIcons.Icons_LogisticRobot, count: 50 },
      { iconId: FactorioIcons.Icons_Roboport, count: 10 },
      { iconId: FactorioIcons.Icons_StorageChest, count: 20 },
      { iconId: FactorioIcons.Icons_RequesterChest, count: 20 },
      { iconId: FactorioIcons.Icons_PassiveProviderChest, count: 20 },
      { iconId: FactorioIcons.Icons_ActiveProviderChest, count: 20 },
    ],
    [
      { iconId: FactorioIcons.Icons_BigMiningDrill, count: 2 },
      { iconId: FactorioIcons.Icons_OffshorePump, count: 1 },
      { iconId: FactorioIcons.Icons_ChemicalPlant, count: 5 },
      { iconId: FactorioIcons.Icons_ElectricFurnace, count: 1 },
      { iconId: FactorioIcons.Icons_AssemblingMachine3, count: 10 },
      { iconId: FactorioIcons.Icons_Foundry, count: 1 },
    ],
    [
      { iconId: FactorioIcons.Icons_Pipe, count: 50 },
      { iconId: FactorioIcons.Icons_PipeToGround, count: 50 },
      { iconId: FactorioIcons.Icons_FastInserter, count: 50 },
      { iconId: FactorioIcons.Icons_Substation, count: 50 },
      { iconId: FactorioIcons.Icons_Accumulator, count: 50 },
      { iconId: FactorioIcons.Icons_ProductivityModule, count: 50 },
      { iconId: FactorioIcons.Icons_QualityModule, count: 50 },
    ],
  ],
  recyclerScrapRatio: [
    { iconId: FactorioIcons.Icons_ProcessingUnit, count: 2 },
    { iconId: FactorioIcons.Icons_AdvancedCircuit, count: 3 },
    { iconId: FactorioIcons.Icons_LowDensityStructure, count: 1 },
    { iconId: FactorioIcons.Icons_SolidFuel, count: 7 },
    { iconId: FactorioIcons.Icons_SteelPlate, count: 4 },
    { iconId: FactorioIcons.Icons_Concrete, count: 6 },
    { iconId: FactorioIcons.Icons_Battery, count: 4 },
    { iconId: FactorioIcons.Icons_Ice, count: 5 },
    { iconId: FactorioIcons.Icons_Stone, count: 4 },
    { iconId: FactorioIcons.Icons_HolmiumOre, count: 1 },
    { iconId: FactorioIcons.Icons_IronGearWheel, count: 20 },
    { iconId: FactorioIcons.Icons_CopperCable, count: 3 },
  ].sort((a, b) => b.count - a.count),
  basicResourceConversionIcons: [
    [[FactorioIcons.Fluid_HeavyOil], [FactorioIcons.Icons_OffshorePump]],
    [[FactorioIcons.Icons_HolmiumOre], [FactorioIcons.Icons_Scrap]],
    [[FactorioIcons.Icons_Stone], [FactorioIcons.Icons_Scrap]],
    [
      [FactorioIcons.Icons_IronPlate],
      [FactorioIcons.Icons_IronGearWheel, FactorioIcons.Icons_Battery],
      [FactorioIcons.Icons_Scrap],
    ],
    [[FactorioIcons.Icons_IronPlate], [FactorioIcons.Icons_ElectronicCircuit]],
    [
      [FactorioIcons.Icons_CopperPlate],
      [
        FactorioIcons.Icons_LowDensityStructure,
        FactorioIcons.Icons_Battery,
        FactorioIcons.Icons_CopperCable,
      ],
      [FactorioIcons.Icons_Scrap],
    ],
    [
      [FactorioIcons.Icons_PlasticBar],
      [
        FactorioIcons.Icons_LowDensityStructure,
        FactorioIcons.Icons_AdvancedCircuit,
      ],
      [FactorioIcons.Icons_Scrap],
    ],
    [
      [FactorioIcons.Fluid_Water],
      [FactorioIcons.Icons_Ice],
      [FactorioIcons.Icons_Scrap],
    ],
    [
      [FactorioIcons.Icons_StoneBrick],
      [FactorioIcons.Icons_Concrete],
      [FactorioIcons.Icons_Scrap],
    ],
    [
      [FactorioIcons.Icons_IronOre],
      [FactorioIcons.Icons_Concrete],
      [FactorioIcons.Icons_Scrap],
    ],
  ],
};
