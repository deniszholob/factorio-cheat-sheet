import { DrillTypes } from './drill.data';

export interface OreData {
  spaceAge?: boolean;
  name: string;
  miningTime: number;
  minedWith: DrillTypes[];
}

export const ORE_DATA: OreData[] = [
  {
    name: 'Scrap',
    miningTime: 0.5,
    minedWith: [
      DrillTypes.Burner_mining_drill,
      DrillTypes.Electric_mining_drill,
      DrillTypes.Big_mining_drill,
    ],
    spaceAge: true,
  },
  {
    name: 'Copper_ore',
    miningTime: 1,
    minedWith: [
      DrillTypes.Burner_mining_drill,
      DrillTypes.Electric_mining_drill,
      DrillTypes.Big_mining_drill,
    ],
  },
  {
    name: 'Iron_ore',
    miningTime: 1,
    minedWith: [
      DrillTypes.Burner_mining_drill,
      DrillTypes.Electric_mining_drill,
      DrillTypes.Big_mining_drill,
    ],
  },
  {
    name: 'Coal',
    miningTime: 1,
    minedWith: [
      DrillTypes.Burner_mining_drill,
      DrillTypes.Electric_mining_drill,
      DrillTypes.Big_mining_drill,
    ],
  },
  {
    name: 'Stone',
    miningTime: 1,
    minedWith: [
      DrillTypes.Burner_mining_drill,
      DrillTypes.Electric_mining_drill,
      DrillTypes.Big_mining_drill,
    ],
  },
  {
    name: 'Calcite',
    miningTime: 1,
    minedWith: [
      DrillTypes.Burner_mining_drill,
      DrillTypes.Electric_mining_drill,
      DrillTypes.Big_mining_drill,
    ],
    spaceAge: true,
  },
  {
    name: 'Uranium_ore',
    miningTime: 2,
    minedWith: [DrillTypes.Electric_mining_drill, DrillTypes.Big_mining_drill],
  },
  {
    name: 'Tungsten_ore',
    miningTime: 5,
    minedWith: [DrillTypes.Big_mining_drill],
    spaceAge: true,
  },
];
