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
  bootstrapItemsVulcanus: [
    [
      { iconId: 'Construction_robot', count: 20 },
      { iconId: 'Logistic_robot', count: 50 },
      { iconId: 'Roboport', count: 10 },
      { iconId: 'Storage_chest', count: 20 },
      { iconId: 'Requester_chest', count: 20 },
      { iconId: 'Passive_provider_chest', count: 20 },
    ],
    [
      { iconId: 'Accumulator', count: 50 },
      { iconId: 'Solar_panel', count: 50 },
      { iconId: 'Pipe', count: 50 },
      { iconId: 'Pipe_to_ground', count: 50 },
      { iconId: 'Fast_inserter', count: 50 },
      { iconId: 'Medium_electric_pole', count: 50 },
    ],
    [
      { iconId: 'Electric_mining_drill', count: 4 },
      { iconId: 'Pumpjack', count: 2 },
      { iconId: 'Oil_refinery', count: 2 },
      { iconId: 'Chemical_plant', count: 10 },
      { iconId: 'Electric_furnace', count: 10 },
      { iconId: 'Assembling_machine_3', count: 20 },
    ],
  ],
  bootstrapItemsFulgora: [
    [
      { iconId: 'Construction_robot', count: 20 },
      { iconId: 'Logistic_robot', count: 50 },
      { iconId: 'Roboport', count: 10 },
      { iconId: 'Storage_chest', count: 20 },
      { iconId: 'Requester_chest', count: 20 },
      { iconId: 'Passive_provider_chest', count: 20 },
      { iconId: 'Active_provider_chest', count: 20 },
    ],
    [
      { iconId: 'Big_mining_drill', count: 2 },
      { iconId: 'Offshore_pump', count: 1 },
      { iconId: 'Chemical_plant', count: 5 },
      { iconId: 'Electric_furnace', count: 1 },
      { iconId: 'Assembling_machine_3', count: 10 },
      { iconId: 'Foundry', count: 1 },
    ],
    [
      { iconId: 'Pipe', count: 50 },
      { iconId: 'Pipe_to_ground', count: 50 },
      { iconId: 'Fast_inserter', count: 50 },
      { iconId: 'Substation', count: 50 },
      { iconId: 'Accumulator', count: 50 },
      { iconId: 'Productivity_module', count: 50 },
      { iconId: 'Quality_module', count: 50 },
    ],
  ],
  recyclerScrapRatio: [
    { iconId: 'Processing_unit', count: 2 },
    { iconId: 'Advanced_circuit', count: 3 },
    { iconId: 'Low_density_structure', count: 1 },
    { iconId: 'Solid_fuel', count: 7 },
    { iconId: 'Steel_plate', count: 4 },
    { iconId: 'Concrete', count: 6 },
    { iconId: 'Battery', count: 4 },
    { iconId: 'Ice', count: 5 },
    { iconId: 'Stone', count: 4 },
    { iconId: 'Holmium_ore', count: 1 },
    { iconId: 'Iron_gear_wheel', count: 20 },
    { iconId: 'Copper_cable', count: 3 },
  ].sort((a, b) => b.count - a.count),
  baseResources: [
    [['Heavy_oil'], ['Offshore_pump']],
    [['Holmium_ore'], ['Scrap']],
    [['Stone'], ['Scrap']],
    [['Iron_plate'], ['Iron_gear_wheel', 'Battery'], ['Scrap']],
    [['Iron_plate'], ['Electronic_circuit']],
    [
      ['Copper_plate'],
      ['Low_density_structure', 'Battery', 'Copper_cable'],
      ['Scrap'],
    ],
    [['Plastic_bar'], ['Low_density_structure', 'Advanced_circuit'], ['Scrap']],
    [['Water'], ['Ice'], ['Scrap']],
    [['Stone_brick'], ['Concrete'], ['Scrap']],
    [['Iron_ore'], ['Concrete'], ['Scrap']],
  ],
  bootstrapItemsGleba: [
    [
      { iconId: 'Construction_robot', count: 15 },
      { iconId: 'Logistic_robot', count: 75 },
      { iconId: 'Roboport', count: 10 },
      { iconId: 'Storage_chest', count: 20 },
      { iconId: 'Requester_chest', count: 30 },
      { iconId: 'Passive_provider_chest', count: 20 },
      { iconId: 'Active_provider_chest', count: 35 },
    ],
    [
      { iconId: 'Chemical_plant', count: 5 },
      { iconId: 'Steel_furnace', count: 15 },
      { iconId: 'Assembling_machine_3', count: 10 },
    ],
    [
      { iconId: 'Fast_inserter', count: 50 },
      { iconId: 'Productivity_module', count: 50 },
      { iconId: 'Speed_module', count: 50 },
    ],
    [
      { iconId: 'Landfill', count: 200 },
      { iconId: 'Iron_plate', count: 200 },
      { iconId: 'Copper_plate', count: 200 },
  ],
};
