export interface BurnablesData {
  spaceAge?: boolean;
  name: string;
  fuelEnergyMj: number;
}

export const BURNABLES_DATA: BurnablesData[] = [
  { name: 'Wood', fuelEnergyMj: 2 },
  { name: 'Coal', fuelEnergyMj: 4 },
  { name: 'Solid_fuel', fuelEnergyMj: 12 },
  { name: 'Rocket_fuel', fuelEnergyMj: 100 },
  { name: 'Nuclear_fuel', fuelEnergyMj: 1210 },
];
