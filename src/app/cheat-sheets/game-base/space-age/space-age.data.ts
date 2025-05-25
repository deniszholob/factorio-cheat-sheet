import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { SpaceAgeData } from './space-age.model';

export const SPACE_AGE_DATA: SpaceAgeData = {
  solarEnergyUnit: 'kW',
  vulcanusSolarRatioPower: 240,
  vulcanusSolarRatio: [
    {
      iconId: FactorioIcons.Icons_SolarPanel,
      count: 1,
    },
    {
      iconId: FactorioIcons.Icons_Accumulator,
      count: 1,
    },
  ],
  yellowAmmoRatio: {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=2-0-10&rate=s&buildings=assembling-machine-3&items=firearm-magazine:f:1',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_FirearmMagazine,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_ElectricFurnace,
        productIconId: FactorioIcons.Icons_IronPlate,
        count: 8,
      },
    ],
  },
  bootstrapItemsVulcanus: [
    [
      { iconId: FactorioIcons.Icons_ConstructionRobot, count: 20 },
      { iconId: FactorioIcons.Icons_LogisticRobot, count: 50 },
      { iconId: FactorioIcons.Icons_Roboport, count: 10 },
      { iconId: FactorioIcons.Icons_StorageChest, count: 20 },
      { iconId: FactorioIcons.Icons_RequesterChest, count: 20 },
      { iconId: FactorioIcons.Icons_PassiveProviderChest, count: 20 },
    ],
    [
      { iconId: FactorioIcons.Icons_Accumulator, count: 50 },
      { iconId: FactorioIcons.Icons_SolarPanel, count: 50 },
      { iconId: FactorioIcons.Icons_Pipe, count: 50 },
      { iconId: FactorioIcons.Icons_PipeToGround, count: 50 },
      { iconId: FactorioIcons.Icons_FastInserter, count: 50 },
      { iconId: FactorioIcons.Icons_MediumElectricPole, count: 50 },
    ],
    [
      { iconId: FactorioIcons.Icons_ElectricMiningDrill, count: 4 },
      { iconId: FactorioIcons.Icons_Pumpjack, count: 2 },
      { iconId: FactorioIcons.Icons_OilRefinery, count: 2 },
      { iconId: FactorioIcons.Icons_ChemicalPlant, count: 10 },
      { iconId: FactorioIcons.Icons_ElectricFurnace, count: 10 },
      { iconId: FactorioIcons.Icons_AssemblingMachine3, count: 20 },
    ],
  ],
  bootstrapItemsFulgora: [
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
  bootstrapItemsGleba: [
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
