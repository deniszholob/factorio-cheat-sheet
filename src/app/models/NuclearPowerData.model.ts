export interface NuclearPowerData {
  reactorPowerMW: number
  heatExchangerPowerMW: number
  turbinePowerMW: number
  waterPerTurbine: number
  simpleRatioPower: string
  storageTanksPerReactor: number
  simpleRatio: Ratio[]
  commonRatioPower: string
  commonRatio: Ratio[]
  pumpRatioPower: string
  pumpRatio: Ratio[]
}

export interface Ratio {
  iconId: string
  count: number
}
