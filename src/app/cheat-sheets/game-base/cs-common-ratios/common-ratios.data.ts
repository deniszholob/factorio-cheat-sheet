import { FactorioIcons } from 'app/shared/factorio-icons.enum';
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
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=automation-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_AutomationSciencePack,
        count: 10,
        rateSeconds: 2.5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_IronGearWheel,
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=logistic-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_LogisticSciencePack,
        rateSeconds: 2.5,
        count: 12,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Inserter,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_TransportBelt,
        count: 0.5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_IronGearWheel,
        count: 1.5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=military-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_MilitarySciencePack,
        count: 10,
        rateSeconds: 2.5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_PiercingRoundsMagazine,
        count: 3,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Grenade,
        count: 8,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Wall,
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=chemical-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ChemicalSciencePack,
        count: 24,
        rateSeconds: 2.5,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Icons_Sulfur,
        count: 0.7,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_AdvancedCircuit,
        count: 18,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_EngineUnit,
        count: 20,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=production-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProductionSciencePack,
        count: 14,
        rateSeconds: 2.5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Rail,
        count: 5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectricFurnace,
        count: 3.33,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProductivityModule,
        count: 10,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=utility-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_UtilitySciencePack,
        count: 14,
        rateSeconds: 2.5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProcessingUnit,
        count: 13.33,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_FlyingRobotFrame,
        count: 13.33,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_LowDensityStructure,
        count: 30,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&buildings=assembling-machine-3&items=space-science-pack:r:5/2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_RocketSilo,
        productIconId: FactorioIcons.Icons_SpaceSciencePack,
        count: 1,
        rateSeconds: 2.5,
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
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_SolarPanel,
        count: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Accumulator,
        count: 2,
      },
    ],
  },
];
const _ELECTRONICS_RATIOS: Ratio[] = [
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=electronic-circuit:f:2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectronicCircuit,
        count: 2,
        rateSeconds: 5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_CopperCable,
        count: 3,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=advanced-circuit:f:6',
    name: '',
    description: "Doesn't take into account Wire for GC",
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_AdvancedCircuit,
        count: 6,
        rateSeconds: 1.25,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectronicCircuit,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_CopperCable,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Icons_PlasticBar,
        count: 1.25,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=processing-unit:f:5',
    name: '',
    description: "Doesn't take into account GC for RC",
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProcessingUnit,
        count: 5,
        rateSeconds: 0.625,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_AdvancedCircuit,
        count: 6,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectronicCircuit,
        count: 5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=speed-module:f:2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_SpeedModule,
        count: 2,
        rateSeconds: 0.167,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_AdvancedCircuit,
        count: 4,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectronicCircuit,
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=speed-module-3:f:2',
    name: '',
    description: 'Same for Other Modules',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_SpeedModule3,
        count: 2,
        rateSeconds: 0.042,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_SpeedModule2,
        count: 4,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_SpeedModule,
        count: 8,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=speed-module-3:f:2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_SpeedModule3,
        count: 2,
        rateSeconds: 0.042,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProcessingUnit,
        count: 8.4,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_AdvancedCircuit,
        count: 31,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectronicCircuit,
        count: 15,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Icons_PlasticBar,
        count: 6.5,
      },
    ],
  },
];
const _PRODUCTION_RATIOS: Ratio[] = [
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=uranium-rounds-magazine:f:10',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_UraniumRoundsMagazine,
        count: 10,
        rateSeconds: 1.25,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_PiercingRoundsMagazine,
        count: 3,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_FirearmMagazine,
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=rail:f:2',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Rail,
        count: 2,
        rateSeconds: 10,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_IronStick,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_ElectricFurnace,
        productIconId: FactorioIcons.Icons_SteelPlate,
        count: 40,
        rateSeconds: 5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#min=4&items=flying-robot-frame:f:20',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_FlyingRobotFrame,
        count: 20,
        rateSeconds: 1.25,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectricEngineUnit,
        count: 10,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_EngineUnit,
        count: 10,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Icons_Battery,
        count: 10,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Pipe,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_IronGearWheel,
        count: 0.5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=rocket-fuel:f:6',
    name: 'SF*1*1/2 = RF*1.25*10/30',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_RocketFuel,
        count: 6,
        rateSeconds: 0.833,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Icons_SolidFuel,
        count: 5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=battery:f:20',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Icons_Battery,
        count: 20,
        rateSeconds: 5,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_SulfuricAcid,
        count: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Icons_Sulfur,
        count: 5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=processing-unit:f:75',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ProcessingUnit,
        count: 75,
        rateSeconds: 9.375,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_SulfuricAcid,
        count: 1,
      },
    ],
  },
];
const _MISC_RATIOS: Ratio[] = [
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=transport-belt:f:1',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_TransportBelt,
        count: 1,
        rateSeconds: 5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_IronGearWheel,
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=inserter:f:1',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Inserter,
        count: 1,
        rateSeconds: 2.5,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectronicCircuit,
        count: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_IronGearWheel,
        count: 1,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&items=electric-engine-unit:f:16',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_ElectricEngineUnit,
        count: 16,
        rateSeconds: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_Lubricant,
        count: 3,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=4&furnace=stone-furnace&items=stone-wall:f:1',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine3,
        productIconId: FactorioIcons.Icons_Wall,
        count: 1,
        rateSeconds: 2.5,
      },
      {
        machineIconId: FactorioIcons.Icons_StoneFurnace,
        productIconId: FactorioIcons.Icons_StoneBrick,
        count: 40,
        rateSeconds: 12.5,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&furnace=stone-furnace&items=iron-gear-wheel:f:1',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine1,
        productIconId: FactorioIcons.Icons_IronGearWheel,
        count: 1,
        rateSeconds: 1,
      },
      {
        machineIconId: FactorioIcons.Icons_StoneFurnace,
        productIconId: FactorioIcons.Icons_IronPlate,
        count: 6.5,
        rateSeconds: 2,
      },
    ],
  },
  {
    source:
      'https://kirkmcdonald.github.io/calc.html#rate=s&min=2&furnace=stone-furnace&items=iron-gear-wheel:f:1',
    name: '',
    ratio: [
      {
        machineIconId: FactorioIcons.Icons_AssemblingMachine2,
        productIconId: FactorioIcons.Icons_IronGearWheel,
        count: 1,
        rateSeconds: 1.5,
      },
      {
        machineIconId: FactorioIcons.Icons_StoneFurnace,
        productIconId: FactorioIcons.Icons_IronPlate,
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
