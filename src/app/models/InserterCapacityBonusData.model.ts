export interface InserterCapacityBonusData {
  bonuses: TechBonus[]
}

export interface TechBonus {
  tech: string
  nonStackItems: string
  nonStackBonus: string
  stackItems: string
  stackBonus: string
}
