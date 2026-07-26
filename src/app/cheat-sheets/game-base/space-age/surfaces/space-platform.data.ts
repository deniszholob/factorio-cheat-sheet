import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { Ratio } from '../../cs-common-ratios/ratio.model';

export interface SpacePlatformData {
  thrusterRatio: Ratio;
  ammoRatios: Ratio[];
}
export const SPACE_PLATFORM_DATA: SpacePlatformData = {
  thrusterRatio: {
    source: 'https://wiki.factorio.com/Thruster',
    name: 'Thruster Supply Ratio',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_Thruster,
        count: 0.625,
      },
      {
        machineIconId: FactorioIcons.Icons_StorageTank,
        count: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_ThrusterOxidizer,
        count: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_ThrusterFuel,
        count: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_Water,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_Crusher,
        productIconId: FactorioIcons.Icons_MetallicAsteroidCrushing,
        count: 0.15,
      },
      {
        machineIconId: FactorioIcons.Icons_Crusher,
        productIconId: FactorioIcons.Icons_CarbonicAsteroidCrushing,
        count: 0.3,
      },
      {
        machineIconId: FactorioIcons.Icons_Crusher,
        productIconId: FactorioIcons.Icons_OxideAsteroidCrushing,
        count: 0.3,
      },
    ],
  },
  ammoRatios: [
    {
      source:
        'https://kirkmcdonald.github.io/calc.html#data=2-0-10&rate=s&buildings=assembling-machine-3&items=firearm-magazine:f:1',
      name: 'Ammo Ratio',
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
    {
      source:
        'https://kirkmcdonald.github.io/calc.html#data=2-0-55&rate=s&buildings=assembling-machine-2&items=firearm-magazine:f:2&modules=firearm-magazine:ee:ee,iron-plate:se:ee',
      name: 'Ammo Build Ratio',
      description: 'Electric furnaces with 1 lvl1 speed module each',
      ratio: [
        {
          machineIconId: FactorioIcons.Icons_AssemblingMachine2,
          productIconId: FactorioIcons.Icons_FirearmMagazine,
          count: 2,
        },
        {
          machineIconId: FactorioIcons.Icons_ElectricFurnace,
          productIconId: FactorioIcons.Icons_IronPlate,
          count: 8,
        },
        {
          machineIconId: FactorioIcons.Icons_Crusher,
          productIconId: FactorioIcons.Icons_MetallicAsteroidCrushing,
          count: 0.5, //0.46
        },
      ],
    },
  ],
};
