export interface FurnaceData {
  spaceAge?: boolean;
  name: string;
  energyConsumptionKw: number;
}

export const FURNACES_DATA: FurnaceData[] = [
  {
    name: 'Stone_furnace',
    energyConsumptionKw: 90,
  },
  {
    name: 'Steel_furnace',
    energyConsumptionKw: 90,
  },
];
