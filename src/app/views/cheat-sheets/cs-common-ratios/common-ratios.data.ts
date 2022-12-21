import { RatioItem } from 'app/shared/ratio/ratio.component';

interface Ratio {
  description?: string;
  name: string;
  source: string;
  ratio: RatioItem[];
}

interface RatioSection {
  name: string;
  ratios: Ratio[];
}

const _SCIENCE_RATIOS: Ratio[] = [
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=automation-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Automation_science_pack',
        count: 10,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_gear_wheel',
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=logistic-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Logistic_science_pack',
        rate: '2.5/s',
        count: 12,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Inserter',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Transport_belt',
        count: 0.5,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_gear_wheel',
        count: 1.5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=military-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Military_science_pack',
        count: 10,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Piercing_rounds_magazine',
        count: 3,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Grenade',
        count: 8,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Wall',
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=chemical-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Chemical_science_pack',
        count: 24,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Sulfur',
        count: 0.7,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Advanced_circuit',
        count: 18,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Engine_unit',
        count: 20,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=production-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Production_science_pack',
        count: 14,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Straight_rail',
        count: 5,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electric_furnace',
        count: 3.33,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Productivity_module',
        count: 10,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=utility-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Utility_science_pack',
        count: 14,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 13.33,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Flying_robot_frame',
        count: 13.33,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Low_density_structure',
        count: 40,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-60&rate=s&min=4&items=space-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: 'Rocket_silo',
        productIconId: 'Space_science_pack',
        count: 1,
        rate: '2.5/s',
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
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Solar_panel',
        count: 2,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Accumulator',
        count: 2,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 2,
      },
    ],
  },
];
const _ELECTRONICS_RATIOS: Ratio[] = [
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=electronic-circuit:f:2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electronic_circuit',
        count: 2,
        rate: '5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Copper_cable',
        count: 3,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=advanced-circuit:f:6',
    name: '',
    description: "Doesn't take into account Wire for GC",
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Advanced_circuit',
        count: 6,
        rate: '1.25/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electronic_circuit',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Copper_cable',
        count: 1,
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Plastic_bar',
        count: 1.3,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=processing-unit:f:5',
    name: '',
    description: "Doesn't take into account GC for RC",
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 5,
        rate: '.625/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Advanced_circuit',
        count: 6,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electronic_circuit',
        count: 5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-60&rate=s&min=4&items=speed-module:f:2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Speed_module',
        count: 2,
        rate: '.167/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Advanced_circuit',
        count: 4,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electronic_circuit',
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=speed-module-3:f:2',
    name: '',
    description: 'Same for Other Modules',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Speed_module_3',
        count: 2,
        rate: '.042/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Speed_module_2',
        count: 5,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Speed_module',
        count: 10,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=speed-module-3:f:2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Speed_module_3',
        count: 2,
        rate: '.042/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 10,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Advanced_circuit',
        count: 38,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electronic_circuit',
        count: 18,
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Plastic_bar',
        count: 8,
      },
    ],
  },
];
const _PRODUCTION_RATIOS: Ratio[] = [
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=uranium-rounds-magazine:f:10',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Uranium_rounds_magazine',
        count: 10,
        rate: '1.25/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Piercing_rounds_magazine',
        count: 3,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Firearm_magazine',
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=rail:f:2',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Straight_rail',
        count: 2,
        rate: '10/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_stick',
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&min=4&items=flying-robot-frame:f:20',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Flying_robot_frame',
        count: 20,
        rate: '1.25/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electric_engine_unit',
        count: 10,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Engine_unit',
        count: 10,
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Battery',
        count: 10,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Pipe',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_gear_wheel',
        count: 0.5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=rocket-fuel:f:6',
    name: 'SF*1*1/2 = RF*1.25*10/30',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Rocket_fuel',
        count: 6,
        rate: '0.833/s',
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Solid_fuel',
        count: 5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=battery:f:20',
    name: '',
    ratio: [
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Battery',
        count: 20,
        rate: '5/s',
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Sulfuric_acid',
        count: 2,
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Sulfur',
        count: 5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=processing-unit:f:75',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Processing_unit',
        count: 75,
        rate: '9.375/s',
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Sulfuric_acid',
        count: 1,
      },
    ],
  },
];
const _MISC_RATIOS: Ratio[] = [
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=transport-belt:f:1',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Transport_belt',
        count: 1,
        rate: '5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_gear_wheel',
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=inserter:f:1',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Inserter',
        count: 1,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electronic_circuit',
        count: 1,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_gear_wheel',
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=electric-engine-unit:f:16',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Electric_engine_unit',
        count: 16,
        rate: '2/s',
      },
      {
        machineIconId: 'Chemical_plant',
        productIconId: 'Lubricant',
        count: 3,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&furnace=stone-furnace&items=stone-wall:f:1',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Wall',
        count: 1,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Stone_furnace',
        productIconId: 'Stone_brick',
        count: 40,
        rate: '12.5/s',
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&furnace=stone-furnace&items=iron-gear-wheel:f:1',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_1',
        productIconId: 'Iron_gear_wheel',
        count: 1,
        rate: '1/s',
      },
      {
        machineIconId: 'Stone_furnace',
        productIconId: 'Iron_plate',
        count: 6.5,
        rate: '2/s',
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=2&furnace=stone-furnace&items=iron-gear-wheel:f:1',
    name: '',
    ratio: [
      {
        machineIconId: 'Assembling_machine_2',
        productIconId: 'Iron_gear_wheel',
        count: 1,
        rate: '1.5/s',
      },
      {
        machineIconId: 'Stone_furnace',
        productIconId: 'Iron_plate',
        rate: '3/s',
        count: 10,
      },
    ],
  },
];

export const COMMON_RATIO_DATA: RatioSection[] = [
  {
    name: 'Science Ratios',
    ratios: _SCIENCE_RATIOS,
  },
  {
    name: 'Electronics Ratios',
    ratios: _ELECTRONICS_RATIOS,
  },
  {
    name: 'Production Ratios',
    ratios: _PRODUCTION_RATIOS,
  },
  {
    name: 'Miscellaneous Ratios',
    ratios: _MISC_RATIOS,
  },
];
