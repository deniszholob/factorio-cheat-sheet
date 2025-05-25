import { RawData } from 'app/models/Data.model';
import { OilRefiningData } from 'app/models/OilRefiningData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const OIL_REFINING_DATA: RawData<OilRefiningData> = {
  cheatSheet: {
    title: 'Oil Refining',
    iconId: FactorioIcons.Icons_OilRefinery,
  },
  data: {
    basicOil: [
      {
        iconId: FactorioIcons.Icons_Pumpjack,
        count: 6,
      },
      {
        iconId: FactorioIcons.Fluid_BasicOilProcessing,
        count: 4.5,
      },
      {
        iconId: FactorioIcons.Icons_PlasticBar,
        count: 2,
      },
    ],
    rushAdvancedOil: {
      [FactorioIcons.Icons_Sulfur]: 38,
      [FactorioIcons.Icons_PlasticBar]: 225,
      [FactorioIcons.Fluid_PetroleumGas]: 2813,
      [FactorioIcons.Fluid_CrudeOil]: 6250,
    },
    simpleCrackingRatio: [
      {
        machineIconId: FactorioIcons.Icons_OilRefinery,
        productIconId: FactorioIcons.Fluid_AdvancedOilProcessing,
        count: 8,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_HeavyOilCracking,
        count: 2,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_LightOilCracking,
        count: 7,
      },
    ],
    perfectCrackingRatio: [
      {
        machineIconId: FactorioIcons.Icons_OilRefinery,
        productIconId: FactorioIcons.Fluid_AdvancedOilProcessing,
        count: 20,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_HeavyOilCracking,
        count: 5,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_LightOilCracking,
        count: 17,
      },
    ],
    moduledCrackingRatio: [
      {
        machineIconId: FactorioIcons.Icons_OilRefinery,
        productIconId: FactorioIcons.Fluid_AdvancedOilProcessing,
        count: 15,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_HeavyOilCracking,
        count: 6,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_LightOilCracking,
        count: 22,
      },
    ],
    simpleLiquefactionCrackingRatio: [
      {
        machineIconId: FactorioIcons.Icons_OilRefinery,
        productIconId: FactorioIcons.Fluid_CoalLiquefaction,
        count: 12,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_HeavyOilCracking,
        count: 8,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_LightOilCracking,
        count: 11,
      },
    ],
    perfectLiquefactionCrackingRatio: [
      {
        machineIconId: FactorioIcons.Icons_OilRefinery,
        productIconId: FactorioIcons.Fluid_CoalLiquefaction,
        count: 60,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_HeavyOilCracking,
        count: 39,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_LightOilCracking,
        count: 55,
      },
    ],
    moduledLiquefactionCrackingRatio: [
      {
        machineIconId: FactorioIcons.Icons_OilRefinery,
        productIconId: FactorioIcons.Fluid_CoalLiquefaction,
        count: 8,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_HeavyOilCracking,
        count: 9,
      },
      {
        machineIconId: FactorioIcons.Icons_ChemicalPlant,
        productIconId: FactorioIcons.Fluid_LightOilCracking,
        count: 15,
      },
    ],
    solidFuel: [
      [
        {
          iconId: FactorioIcons.Fluid_HeavyOil,
          count: 40,
        },
        {
          iconId: FactorioIcons.Fluid_LightOil,
          count: 30,
        },
        {
          iconId: FactorioIcons.Icons_SolidFuel,
          count: 3,
        },
      ],
      [
        {
          iconId: FactorioIcons.Fluid_HeavyOil,
          count: 40,
        },
        {
          iconId: FactorioIcons.Icons_SolidFuel,
          count: 2,
        },
      ],
      [
        {
          iconId: FactorioIcons.Fluid_HeavyOil,
          count: 40,
        },
        {
          iconId: FactorioIcons.Fluid_LightOil,
          count: 30,
        },
        {
          iconId: FactorioIcons.Fluid_PetroleumGas,
          count: 20,
        },
        {
          iconId: FactorioIcons.Icons_SolidFuel,
          count: 1,
        },
      ],
    ],
    production: [
      {
        processes: [
          {
            machineIconId: FactorioIcons.Icons_OilRefinery,
            productIconId: FactorioIcons.Fluid_BasicOilProcessing,
            count: 1,
          },
        ],
        oil: '20/s',
        water: '-',
        petrol: '9/s',
        lightOil: '-',
        heavyOil: '-',
      },
      {
        processes: [
          {
            machineIconId: FactorioIcons.Icons_OilRefinery,
            productIconId: FactorioIcons.Fluid_AdvancedOilProcessing,
            count: 1,
          },
        ],
        oil: '20/s',
        water: '10/s',
        petrol: '11/s',
        lightOil: '9/s',
        heavyOil: '5/s',
      },
      {
        processes: [
          {
            machineIconId: FactorioIcons.Icons_OilRefinery,
            productIconId: FactorioIcons.Fluid_AdvancedOilProcessing,
            count: 1,
          },
          {
            machineIconId: FactorioIcons.Icons_ChemicalPlant,
            productIconId: FactorioIcons.Fluid_LightOilCracking,
            count: 0.6,
          },
        ],
        oil: '20/s',
        water: '19/s',
        petrol: '17/s',
        lightOil: '-',
        heavyOil: '5/s',
      },
      {
        processes: [
          {
            machineIconId: FactorioIcons.Icons_OilRefinery,
            productIconId: FactorioIcons.Fluid_AdvancedOilProcessing,
            count: 1,
          },
          {
            machineIconId: FactorioIcons.Icons_ChemicalPlant,
            productIconId: FactorioIcons.Fluid_HeavyOilCracking,
            count: 0.25,
          },
        ],
        oil: '20/s',
        water: '13.75/s',
        petrol: '11/s',
        lightOil: '12.75/s',
        heavyOil: '-',
      },
      {
        processes: [
          {
            machineIconId: FactorioIcons.Icons_OilRefinery,
            productIconId: FactorioIcons.Fluid_AdvancedOilProcessing,
            count: 1,
          },
          {
            machineIconId: FactorioIcons.Icons_ChemicalPlant,
            productIconId: FactorioIcons.Fluid_HeavyOilCracking,
            count: 0.25,
          },
          {
            machineIconId: FactorioIcons.Icons_ChemicalPlant,
            productIconId: FactorioIcons.Fluid_LightOilCracking,
            count: 0.85,
          },
        ],
        oil: '20/s',
        water: '26.5/s',
        petrol: '19.5/s',
        lightOil: '-',
        heavyOil: '-',
      },
      {
        processes: [
          {
            machineIconId: FactorioIcons.Icons_ChemicalPlant,
            productIconId: FactorioIcons.Fluid_HeavyOilCracking,
            count: 1,
          },
        ],
        oil: '-',
        water: '15/s',
        petrol: '-',
        lightOil: '15/s',
        heavyOil: '20/s',
      },
      {
        processes: [
          {
            machineIconId: FactorioIcons.Icons_ChemicalPlant,
            productIconId: FactorioIcons.Fluid_LightOilCracking,
            count: 1,
          },
        ],
        oil: '-',
        water: '15/s',
        petrol: '10/s',
        lightOil: '15/s',
        heavyOil: '-',
      },
    ],
  },
};
