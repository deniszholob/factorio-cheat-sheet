import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface BurnablesData {
  spaceAge?: boolean;
  iconId: FactorioIcons;
  fuelEnergyMj: number;
}

export const BURNABLES_DATA: BurnablesData[] = [
  { iconId: FactorioIcons.Icons_Wood, fuelEnergyMj: 2 },
  { iconId: FactorioIcons.Icons_Coal, fuelEnergyMj: 4 },
  { iconId: FactorioIcons.Icons_SolidFuel, fuelEnergyMj: 12 },
  { iconId: FactorioIcons.Icons_RocketFuel, fuelEnergyMj: 100 },
  { iconId: FactorioIcons.Icons_NuclearFuel, fuelEnergyMj: 1210 },
];
