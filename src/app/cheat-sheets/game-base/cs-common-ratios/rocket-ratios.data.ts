import { Ratio } from './ratio.model';

export const ROCKET_RATIO_DATA: Ratio[] = [
  {
    description: 'Rocket Components Ratio With No Satellite',
    name: 'Rocket Comp. Ratio',
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&min=4&items=rocket-part:r:15',
    ratio: [
      {
        machineIconId: 'Rocket_silo',
        productIconId: 'Rocket_part',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_control_unit',
        count: 60,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Low_density_structure',
        count: 40,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_fuel',
        count: 60,
      },
    ],
  },
  {
    description: 'Rocket Components Ratio With Satellite',
    name: 'Rocket Comp. Ratio w/ Sat',
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&min=4&items=space-science-pack:r:150',
    ratio: [
      {
        machineIconId: 'Rocket_silo',
        productIconId: 'Rocket_part',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_control_unit',
        count: 60,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Low_density_structure',
        count: 44,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_fuel',
        count: 63,
      },
    ],
  },
  {
    description: 'Rocket Components Moduled Ratio With Satellite',
    name: 'Rocket Comp. Module Ratio w/ Sat',
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-60&rate=s&min=4&items=space-science-pack:r:5/2&modules=rocket-part:p3:p3:p3:p3;se:2',

    ratio: [
      {
        machineIconId: 'Rocket_silo',
        productIconId: 'Rocket_part',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_control_unit',
        count: 43,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Low_density_structure',
        count: 33,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_fuel',
        count: 46,
      },
    ],
  },
];
