export interface MiningData {
  prodBonusPercent: number
  drills: Drill[]
  ores: Ore[]
}

export interface Drill {
  id: string
  miningSpeed: number
}

export interface Ore {
  id: string
  miningTime: number
  burnerMiningDrill: boolean
  electricMiningDrill: boolean
}
