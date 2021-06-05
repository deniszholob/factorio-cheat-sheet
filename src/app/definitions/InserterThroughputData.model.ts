export interface InserterThroughputData {
  throughputNoBonus: ThroughputBonus[]
  throughputBonus2: ThroughputBonus[]
  throughputMaxBonus: ThroughputBonus[]
}

export interface ThroughputBonus {
  icons: string[]
  stackSize: number
  chestToChest: number
  chestToYellowBelt: number
  chestToRedBelt: number
  chestToBlueBelt: number
}
