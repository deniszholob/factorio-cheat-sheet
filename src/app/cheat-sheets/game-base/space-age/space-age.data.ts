import { SpaceAgeData } from './space-age.model';

export const SPACE_AGE_DATA: SpaceAgeData = {
  solarEnergyUnit: 'kW',
  vulcanusSolarRatioPower: 240,
  vulcanusSolarRatio: [
    {
      iconId: 'Solar_panel',
      count: 1,
    },
    {
      iconId: 'Accumulator',
      count: 1,
    },
  ],
  yellowAmmoRatio: {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=2-0-10&rate=s&buildings=assembling-machine-3&items=firearm-magazine:f:1',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Firearm_magazine',
        count: 1,
      },
      {
        machineIconId: 'Electric_furnace',
        productIconId: 'Iron_plate',
        count: 8,
      },
    ],
  },
};
