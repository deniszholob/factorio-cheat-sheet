export interface DrillData {
  spaceAge?: boolean;
  name: DrillTypes;
  miningSpeed: number;
}

export enum DrillTypes {
  Burner_mining_drill = 'Burner_mining_drill',
  Electric_mining_drill = 'Electric_mining_drill',
  Big_mining_drill = 'Big_mining_drill',
}

export const DRILL_DATA: DrillData[] = [
  { name: DrillTypes.Burner_mining_drill, miningSpeed: 0.25 },
  { name: DrillTypes.Electric_mining_drill, miningSpeed: 0.5 },
  { name: DrillTypes.Big_mining_drill, miningSpeed: 2.5, spaceAge: true },
];
