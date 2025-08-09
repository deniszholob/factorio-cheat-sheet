import { RawData } from 'app/models/Data.model';
import { ScienceData } from 'app/models/ScienceData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const SCIENCE_DATA: RawData<ScienceData> = {
  cheatSheet: {
    title: 'Science',
    iconId: FactorioIcons.Icons_Lab,
  },
  data: {
    packs: [
      {
        iconId: FactorioIcons.Icons_AutomationSciencePack,
        count: 5,
      },
      {
        iconId: FactorioIcons.Icons_LogisticSciencePack,
        count: 6,
      },
      {
        iconId: FactorioIcons.Icons_MilitarySciencePack,
        count: 5,
      },
      {
        iconId: FactorioIcons.Icons_ChemicalSciencePack,
        count: 12,
      },
      {
        iconId: FactorioIcons.Icons_ProductionSciencePack,
        count: 7,
      },
      {
        iconId: FactorioIcons.Icons_UtilitySciencePack,
        count: 7,
      },
    ],
    assembler2: {
      iconId: FactorioIcons.Icons_AssemblingMachine2,
      speed: '45/m',
    },
    assembler3: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: '75/m',
    },
    space2: {
      iconId: FactorioIcons.Icons_SpaceSciencePack,
      speed: '1R/22m',
    },
    space3: {
      iconId: FactorioIcons.Icons_SpaceSciencePack,
      speed: '1R/13m',
    },
  },
};

export interface SciencePackData {
  iconId: FactorioIcons;
  craftTimeSec: number;
  outputCount: number;
  factory: {
    iconId: FactorioIcons;
    speed: number;
    productivity?: number;
  };
}

export const SCIENCE_PACK_DATA_VANILLA: SciencePackData[] = [
  {
    iconId: FactorioIcons.Icons_AutomationSciencePack,
    craftTimeSec: 5,
    outputCount: 1,
    factory: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: 1.25,
    },
  },
  {
    iconId: FactorioIcons.Icons_LogisticSciencePack,
    craftTimeSec: 6,
    outputCount: 1,
    factory: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: 1.25,
    },
  },
  {
    iconId: FactorioIcons.Icons_MilitarySciencePack,
    craftTimeSec: 10,
    outputCount: 2,
    factory: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: 1.25,
    },
  },
  {
    iconId: FactorioIcons.Icons_ChemicalSciencePack,
    craftTimeSec: 24,
    outputCount: 2,
    factory: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: 1.25,
    },
  },
  {
    iconId: FactorioIcons.Icons_ProductionSciencePack,
    craftTimeSec: 21,
    outputCount: 3,
    factory: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: 1.25,
    },
  },
  {
    iconId: FactorioIcons.Icons_UtilitySciencePack,
    craftTimeSec: 21,
    outputCount: 3,
    factory: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: 1.25,
    },
  },
  {
    iconId: FactorioIcons.Icons_SpaceSciencePack,
    craftTimeSec: 300,
    outputCount: 1000,
    factory: {
      iconId: FactorioIcons.Icons_RocketSilo,
      speed: 1,
    },
  },
];

export const SCIENCE_PACK_DATA_SA: SciencePackData[] = [
  {
    iconId: FactorioIcons.Icons_SpaceSciencePack,
    craftTimeSec: 15,
    outputCount: 5,
    factory: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: 1.25,
    },
  },
  {
    iconId: FactorioIcons.Icons_MetallurgicSciencePack,
    craftTimeSec: 10,
    outputCount: 1,
    factory: {
      iconId: FactorioIcons.Icons_Foundry,
      speed: 4,
      // productivity: 1.5,
    },
  },
  {
    iconId: FactorioIcons.Icons_AgriculturalSciencePack,
    craftTimeSec: 4,
    outputCount: 1,
    factory: {
      iconId: FactorioIcons.Icons_Biochamber,
      speed: 2,
      // productivity: 1.5,
    },
  },
  {
    iconId: FactorioIcons.Icons_ElectromagneticSciencePack,
    craftTimeSec: 10,
    outputCount: 1,
    factory: {
      iconId: FactorioIcons.Icons_ElectromagneticPlant,
      speed: 2,
      // productivity: 1.5,
    },
  },
  {
    iconId: FactorioIcons.Icons_CryogenicSciencePack,
    craftTimeSec: 20,
    outputCount: 1,
    factory: {
      iconId: FactorioIcons.Icons_CryogenicPlant,
      speed: 2,
    },
  },
  {
    iconId: FactorioIcons.Icons_PromethiumSciencePack,
    craftTimeSec: 5,
    outputCount: 10,
    factory: {
      iconId: FactorioIcons.Icons_CryogenicPlant,
      speed: 2,
    },
  },
];

export const SCIENCE_PACK_DATA_VANILLA_NO_SPACE: SciencePackData[] = [
  ...SCIENCE_PACK_DATA_VANILLA.slice(0, SCIENCE_PACK_DATA_VANILLA.length - 1),
];
export const SCIENCE_PACK_DATA_ALL: SciencePackData[] = [
  ...SCIENCE_PACK_DATA_VANILLA_NO_SPACE,
  ...SCIENCE_PACK_DATA_SA,
];

export interface SciencePackFactoryRequirement {
  scienceIconId: FactorioIcons;
  factoryIconId: FactorioIcons;
  effectiveRate: number;
  machinesNeeded: number;
}

function getRatePerFactory(data: SciencePackData): number {
  // return (data.outputCount / data.craftTimeSec) * data.factory.speed;
  return (
    (data.outputCount * data.factory.speed * (data.factory.productivity ?? 1)) /
    data.craftTimeSec
  );
}

function calculateBalancedFactories(
  data: SciencePackData[]
): SciencePackFactoryRequirement[] {
  // Step 1: Calculate per-factory rates
  const rates = data.map((d) => ({
    scienceIconId: d.iconId,
    factoryIconId: d.factory.iconId,
    ratePerFactory: getRatePerFactory(d),
  }));

  // Step 2: Find the slowest rate
  const minRate = Math.min(...rates.map((r) => r.ratePerFactory));

  // Step 3: Calculate number of factories needed for each to match the minRate
  const result: SciencePackFactoryRequirement[] = rates.map((r) => ({
    scienceIconId: r.scienceIconId,
    factoryIconId: r.factoryIconId,
    effectiveRate: r.ratePerFactory,
    machinesNeeded: minRate / r.ratePerFactory,
  }));

  return result;
}

// function scaleToWholeNumbers(
//   reqs: SciencePackFactoryRequirement[]
// ): SciencePackFactoryRequirement[] {
//   const machines = reqs.map((r) => r.machinesNeeded);
//   const scale = lcmOfDenominators(machines);
//   return reqs.map((r) => {
//     const machinesNeeded = Math.round(r.machinesNeeded * scale);
//     return {
//       ...r,
//       machinesNeeded,
//     };
//   });
// }

// function lcmOfDenominators(nums: number[]): number {
//   const getDenominator = (num: number) => {
//     const s = num.toString();
//     if (!s.includes('.')) return 1;
//     return Math.pow(10, s.split('.')[1].length);
//   };
//   const denominators = nums.map(getDenominator);
//   return denominators.reduce((a, b) => lcm(a, b), 1);
// }

// function lcm(a: number, b: number): number {
//   return (a * b) / gcd(a, b);
// }

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function calculateMinimalMachines(
  data: SciencePackData[]
): SciencePackFactoryRequirement[] {
  // Step 1: Calculate items/sec rate for each factory
  const rates = data.map((d) => getRatePerFactory(d));

  // Step 2: Convert to "inverse rate" (i.e., time per item), to compare production time ratios
  const inverseRates = rates.map((rate) => 1 / rate);

  // Step 3: Scale to integers with same precision
  const scaled = inverseRates.map((r) => Math.round(r * 1000)); // scale to avoid decimals, e.g., 1.2 -> 1200

  // Step 4: Divide by GCD to reduce to minimal ratio
  const allGCD = scaled.reduce((a, b) => gcd(a, b));
  const minimized = scaled.map((value) => value / allGCD);

  // Step 5: Return result
  return data.map((d, i) => ({
    scienceIconId: d.iconId,
    factoryIconId: d.factory.iconId,
    effectiveRate: rates[i],
    machinesNeeded: minimized[i],
  }));
}

const packsForCalculations: SciencePackData[] =
  SCIENCE_PACK_DATA_VANILLA_NO_SPACE;
// const packsForCalculations: SciencePackData[] = SCIENCE_PACK_DATA_VANILLA;
// const packsForCalculations: SciencePackData[] = SCIENCE_PACK_DATA_SA;
// const packsForCalculations: SciencePackData[] = SCIENCE_PACK_DATA_ALL;

export const SCIENCE_PACK_FACTORY_REQUIREMENTS: SciencePackFactoryRequirement[] =
  calculateBalancedFactories(packsForCalculations);

// export const SCIENCE_PACK_FACTORY_REQUIREMENTS_WHOLE_NUMBERS: SciencePackFactoryRequirement[] =
//   scaleToWholeNumbers(SCIENCE_PACK_FACTORY_REQUIREMENTS);

export const SCIENCE_PACK_FACTORY_REQUIREMENTS_RATIOS: SciencePackFactoryRequirement[] =
  calculateMinimalMachines(packsForCalculations);

console.log(
  `SCIENCE_PACK_FACTORY_REQUIREMENTS`,
  SCIENCE_PACK_FACTORY_REQUIREMENTS
);
// console.log(
//   `SCIENCE_PACK_FACTORY_REQUIREMENTs *12`,
//   SCIENCE_PACK_FACTORY_REQUIREMENTS.map((r) => ({
//     ...r,
//     machinesNeeded: 25 * r.machinesNeeded,
//   }))
// );
// console.log(
//   `SCIENCE_PACK_FACTORY_REQUIREMENTS_WHOLE_NUMBERS`,
//   SCIENCE_PACK_FACTORY_REQUIREMENTS_WHOLE_NUMBERS
// );
console.log(
  `SCIENCE_PACK_FACTORY_REQUIREMENTS_RATIOS`,
  SCIENCE_PACK_FACTORY_REQUIREMENTS_RATIOS
);
