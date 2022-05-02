
export interface TrainColorsData {
    blueprint: string;
    trainColors: TrainColor[];
    trainColorsGenerated: TrainColor[];
}

export interface TrainColor {
    icon: string;
    rgb: number[];
    type?: string;
}
