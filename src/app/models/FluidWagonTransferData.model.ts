export interface FluidWagonTransferData {
  pumpRate: number;
  offshorePumpRate: number;
  storageTankSize: number;
  fluidWagonSize: number;
  measuredTransferTimes: MeasuredTransferTime[];
}

export interface MeasuredTransferTime {
  pumps: string;
  transferTime: number;
}
