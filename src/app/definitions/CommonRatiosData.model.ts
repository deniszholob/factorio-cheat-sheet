export interface CommonRatioData {
  machineCraftSpeed: MachineCraftSpeed[]
  scienceRatios: Ratio[]
  electronicsRatios: Ratio[]
  productionRatios: Ratio[]
  miscRatios: Ratio[]
  rocketComponentsRatioNoSatellite: Ratio
  rocketComponentsRatioWithSatellite: Ratio
  rocketComponentsModuledRatioWithSatellite: Ratio
}

export interface MachineCraftSpeed {
  iconId: string
  speed: string
}

export interface Ratio {
  source: string
  name: string
  ratio: RatioItem[]
}

// TODO: Split the comment out/better structure
export interface RatioItem {
  iconId?: string
  count?: any
  name?: string
  comment?: string
}
