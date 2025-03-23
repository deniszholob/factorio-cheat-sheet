export interface InserterCapacityBonusData {
  bonuses: TechBonus[];
}

export interface TechBonus {
  tech: string;
  nonStackItems: string;
  nonStackBonus: string;
  bulkItems: string;
  bulkBonus: string;
  stackItems: string;
  stackBonus: string;
}
