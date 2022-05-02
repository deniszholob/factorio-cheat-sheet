export interface CargoWagonTransferData {
  cargoSlots: number
  inserterCount: number
  inserterCyclesPerSecC2C: InserterCyclesPerSecC2C
}

export interface InserterCyclesPerSecC2C {
  burner_inserter: number
  inserter: number
  long_handed_inserter: number
  fast_inserter: number
  filter_inserter: number
  stack_inserter: number
  stack_filter_inserter: number
}
