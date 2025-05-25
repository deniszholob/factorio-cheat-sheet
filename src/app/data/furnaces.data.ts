import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface FurnaceData {
  spaceAge?: boolean;
  iconId: FactorioIcons;
  energyConsumptionKw: number;
}

export const FURNACES_DATA: FurnaceData[] = [
  {
    iconId: FactorioIcons.Icons_StoneFurnace,
    energyConsumptionKw: 90,
  },
  {
    iconId: FactorioIcons.Icons_SteelFurnace,
    energyConsumptionKw: 90,
  },
];
