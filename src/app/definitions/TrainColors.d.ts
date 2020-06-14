
export interface TrainColorsData {
    trainColors: TrainColor[];
    trainColorsGenerated: TrainColor[];
}

export interface TrainColor {
    icon: string;
    rgb: number[];
    type?: string;
}
