import { RawData } from 'app/models/Data.model';
import { MaterialProcessingData } from 'app/models/MaterialProcessingData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const MATERIAL_PROCESSING_SHEET_NAV: NavData = newNavData(
  'Material Processing',
  FactorioIcons.ItemGroup_IntermediateProducts
);

export const MATERIAL_PROCESSING_DATA: RawData<MaterialProcessingData> = {
  cheatSheet: {
    title: MATERIAL_PROCESSING_SHEET_NAV.title,
    iconId: MATERIAL_PROCESSING_SHEET_NAV.sheetIconId,
  },
  data: {
    beltEmpty: [
      {
        processorIconId: [FactorioIcons.Icons_StoneFurnace],
        materialIconId: [
          FactorioIcons.Icons_CopperOre,
          FactorioIcons.Icons_IronOre,
          FactorioIcons.Icons_IronPlate,
        ],
        beltYellow: 48,
        beltRed: 96,
        beltBlue: 144,
        beltGreen: 192,
      },
      {
        processorIconId: [
          FactorioIcons.Icons_SteelFurnace,
          FactorioIcons.Icons_ElectricFurnace,
        ],
        materialIconId: [
          FactorioIcons.Icons_CopperOre,
          FactorioIcons.Icons_IronOre,
          FactorioIcons.Icons_IronPlate,
        ],
        beltYellow: 24,
        beltRed: 48,
        beltBlue: 72,
        beltGreen: 96,
      },
      {
        processorIconId: [FactorioIcons.Icons_StoneFurnace],
        materialIconId: [FactorioIcons.Icons_Stone],
        beltYellow: 24,
        beltRed: 48,
        beltBlue: 72,
        beltGreen: 96,
      },
      {
        processorIconId: [
          FactorioIcons.Icons_SteelFurnace,
          FactorioIcons.Icons_ElectricFurnace,
        ],
        materialIconId: [FactorioIcons.Icons_Stone],
        beltYellow: 12,
        beltRed: 24,
        beltBlue: 36,
        beltGreen: 48,
      },
      {
        processorIconId: [FactorioIcons.Icons_Centrifuge],
        materialIconId: [FactorioIcons.Icons_UraniumOre],
        beltYellow: 18,
        beltRed: 36,
        beltBlue: 54,
        beltGreen: 72,
      },
    ],
    beltFill: [
      {
        processorIconId: [FactorioIcons.Icons_StoneFurnace],
        materialIconId: [
          FactorioIcons.Icons_CopperPlate,
          FactorioIcons.Icons_IronPlate,
          FactorioIcons.Icons_StoneBrick,
        ],
        beltYellow: 48,
        beltRed: 96,
        beltBlue: 144,
        beltGreen: 192,
      },
      {
        processorIconId: [
          FactorioIcons.Icons_SteelFurnace,
          FactorioIcons.Icons_ElectricFurnace,
        ],
        materialIconId: [
          FactorioIcons.Icons_CopperOre,
          FactorioIcons.Icons_IronOre,
          FactorioIcons.Icons_IronPlate,
        ],
        beltYellow: 24,
        beltRed: 48,
        beltBlue: 72,
        beltGreen: 96,
      },
      {
        processorIconId: [FactorioIcons.Icons_StoneFurnace],
        materialIconId: [FactorioIcons.Icons_SteelPlate],
        beltYellow: 240,
        beltRed: 480,
        beltBlue: 720,
        beltGreen: 960,
      },
      {
        processorIconId: [
          FactorioIcons.Icons_SteelFurnace,
          FactorioIcons.Icons_ElectricFurnace,
        ],
        materialIconId: [FactorioIcons.Icons_SteelPlate],
        beltYellow: 120,
        beltRed: 240,
        beltBlue: 360,
        beltGreen: 480,
      },
      {
        processorIconId: [FactorioIcons.Icons_Centrifuge],
        materialIconId: [
          FactorioIcons.Icons_Uranium235,
          FactorioIcons.Icons_Uranium238,
        ],
        beltYellow: 180,
        beltRed: 360,
        beltBlue: 540,
        beltGreen: 720,
      },
    ],
  },
};
