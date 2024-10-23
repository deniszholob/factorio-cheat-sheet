export interface FluidWagonTransferData {
  pumpRate: number;
  offshorePumpRate: number;
  storageTankSize: number;
  fluidWagonSize: number;
}

export interface MeasuredTransferTime {
  pumps: string;
  transferTime: number;
}
