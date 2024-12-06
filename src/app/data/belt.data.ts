export interface BeltData {
  beltDensity: number;
  beltInfo: BeltInfo[];
}

export interface BeltInfo {
  spaceAge?: boolean;
  name: string;
  throughput: number;
  undergroundSpacing: number;
  icons: string[];
}

export const BELT_DATA: BeltData = {
  beltDensity: 8,
  beltInfo: [
    {
      name: 'Transport_belt',
      throughput: 15,
      undergroundSpacing: 4,
      icons: ['Transport_belt', 'Underground_belt', 'Splitter'],
    },
    {
      name: 'Fast_transport_belt',
      throughput: 30,
      undergroundSpacing: 6,
      icons: ['Fast_transport_belt', 'Fast_underground_belt', 'Fast_splitter'],
    },
    {
      name: 'Express_transport_belt',
      throughput: 45,
      undergroundSpacing: 8,
      icons: [
        'Express_transport_belt',
        'Express_underground_belt',
        'Express_splitter',
      ],
    },
    {
      name: 'Turbo_transport_belt',
      throughput: 60,
      undergroundSpacing: 10,
      icons: [
        'Turbo_transport_belt',
        'Turbo_underground_belt',
        'Turbo_splitter',
      ],
      spaceAge: true,
    },
  ],
};
