import { SimpleRatio } from 'app/data';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { PowerRatio, Ratio } from '../../cs-common-ratios/ratio.model';

export interface VulcanusData {
  solarPowerRatio: PowerRatio;
  steamTurbinePowerRatio: PowerRatio;
  commonRatios: Ratio[];
  bootstrapItems: SimpleRatio[][];
}

export const VULCANUS_DATA: VulcanusData = {
  solarPowerRatio: {
    source: '',
    name: 'Solar Ratio',
    powerMw: 240,
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_SolarPanel,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_Accumulator,
        count: 1,
      },
    ],
  },
  steamTurbinePowerRatio: {
    source: '',
    name: 'Steam Turbine Build Ratio',
    powerMw: 580,
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_AcidNeutralisation,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_SteamCondensation,
        count: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_SteamTurbine,
        count: 100,
      },
    ],
  },
  commonRatios: [
    {
      source: '',
      name: '',
      ratio: [
        {
          machineIconId: FactorioIcons.Icons_OilRefinery,
          productIconId: FactorioIcons.Fluid_SimpleCoalLiquefaction,
          count: 1,
        },
        {
          machineIconId: FactorioIcons.Icons_ChemicalPlant,
          productIconId: FactorioIcons.Fluid_Lubricant,
          count: 1,
        },
      ],
    },
    {
      source: '',
      name: '',
      ratio: [
        {
          machineIconId: FactorioIcons.Icons_OilRefinery,
          productIconId: FactorioIcons.Fluid_SimpleCoalLiquefaction,
          count: 2,
        },
        {
          machineIconId: FactorioIcons.Icons_ChemicalPlant,
          productIconId: FactorioIcons.Fluid_HeavyOilCracking,
          count: 1,
        },
        {
          machineIconId: FactorioIcons.Icons_ChemicalPlant,
          productIconId: FactorioIcons.Fluid_LightOilCracking,
          count: 1,
        },
      ],
    },
  ],
  bootstrapItems: [
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
};
