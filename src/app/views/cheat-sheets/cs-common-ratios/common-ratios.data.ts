import { RatioItem } from 'app/shared/ratio/ratio.component';

interface Ratio {
  description?: string;
  name: string;
  source: string;
  ratio: RatioItem[];
}

export interface RatioSection {
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
        rateSeconds: 2.5,
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
        rateSeconds: 2.5,
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
        rateSeconds: 2.5,
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
        rateSeconds: 2.5,
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
        rateSeconds: 2.5,
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
        rateSeconds: 2.5,
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
        rateSeconds: 2.5,
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
        rateSeconds: 5,
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
        rateSeconds: 1.25,
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
        rateSeconds: 0.625,
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
        rateSeconds: 0.167,
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
        rateSeconds: 0.042,
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
        rateSeconds: 0.042,
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
        rateSeconds: 1.25,
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
        rateSeconds: 10,
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_stick',
        count: 1,
      },
      {
        machineIconId: 'Electric_furnace',
        productIconId: 'Steel_plate',
        count: 40,
        rateSeconds: 5,
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
        rateSeconds: 1.25,
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
        rateSeconds: 0.833,
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
        rateSeconds: 5,
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
        rateSeconds: 9.375,
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
        rateSeconds: 5,
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
        rateSeconds: 2.5,
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
        rateSeconds: 2,
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
        rateSeconds: 2.5,
      },
      {
        machineIconId: 'Stone_furnace',
        productIconId: 'Stone_brick',
        count: 40,
        rateSeconds: 12.5,
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
        rateSeconds: 1,
      },
      {
        machineIconId: 'Stone_furnace',
        productIconId: 'Iron_plate',
        count: 6.5,
        rateSeconds: 2,
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
        rateSeconds: 1.5,
      },
      {
        machineIconId: 'Stone_furnace',
        productIconId: 'Iron_plate',
        rateSeconds: 3,
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
