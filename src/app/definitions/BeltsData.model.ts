
export interface BeltsData {
  belt_density: number;
  belt_info: BeltInfo[];
}

export interface BeltInfo {
  tier: number;
  icons: string[];
  throughput: number;
  underground_distance: number;
}

