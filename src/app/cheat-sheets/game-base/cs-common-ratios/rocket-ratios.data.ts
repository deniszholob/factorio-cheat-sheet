import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { Ratio } from './ratio.model';

export const ROCKET_RATIO_DATA: Ratio[] = [
  {
    description: 'Rocket Components Ratio With No Satellite',
    name: 'Rocket Comp. Ratio',
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&buildings=assembling-machine-3&items=rocket-part:r:1/4',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_RocketSilo,
        productIconId: FactorioIcons.Icons_RocketPart,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProcessingUnit,
        count: 20,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_RocketFuel,
        count: 30,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_LowDensityStructure,
        count: 30,
      },
    ],
  },
  {
    description: 'Rocket Components Ratio With Satellite',
    name: 'Rocket Comp. Ratio w/ Sat',
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&buildings=assembling-machine-3&items=space-science-pack:r:5/2',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_RocketSilo,
        productIconId: FactorioIcons.Icons_RocketPart,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProcessingUnit,
        count: 22,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_RocketFuel,
        count: 31.5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_LowDensityStructure,
        count: 33,
      },
    ],
  },
  {
    description: 'Rocket Components Moduled Ratio With Satellite',
    name: 'Rocket Comp. Module Ratio w/ Sat',
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&buildings=assembling-machine-3&items=space-science-pack:r:5/2&modules=rocket-part:p3:p3:p3:p3;se:se:1',

    ratio: [
      {
        machineIconId: FactorioIcons.Icons_RocketSilo,
        productIconId: FactorioIcons.Icons_RocketPart,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProcessingUnit,
        count: 16.3,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_RocketFuel,
        count: 23,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_LowDensityStructure,
        count: 24.5,
      },
    ],
  },
];
