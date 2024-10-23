import { Ratio } from './ratio.model';

export const ROCKET_RATIO_DATA: Ratio[] = [
  {
    description: 'Rocket Components Ratio With No Satellite',
    name: 'Rocket Comp. Ratio',
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&buildings=assembling-machine-3&items=rocket-part:r:1/4',
    ratio: [
      {
        machineIconId: 'Rocket_silo',
        productIconId: 'Rocket_part',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 20,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_fuel',
        count: 30,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Low_density_structure',
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
        machineIconId: 'Rocket_silo',
        productIconId: 'Rocket_part',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 22,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_fuel',
        count: 31.5,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Low_density_structure',
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
        machineIconId: 'Rocket_silo',
        productIconId: 'Rocket_part',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 16.3,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_fuel',
        count: 23,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Low_density_structure',
        count: 24.5,
      },
    ],
  },
];
