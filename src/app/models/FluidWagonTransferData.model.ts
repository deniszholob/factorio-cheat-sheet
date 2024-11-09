export interface FluidWagonTransferData {
  pumpRate: number;
  offshorePumpRate: number;
  storageTankSize: number;
  fluidWagonSize: number;
  pipelineLimit: number;
}

export interface MeasuredTransferTime {
  pumps: string;
  transferTime: number;
}
