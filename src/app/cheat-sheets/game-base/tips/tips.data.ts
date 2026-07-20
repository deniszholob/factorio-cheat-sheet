export interface Tips {
  debug: DebugOption[];
}

export interface DebugOption {
  options: string[];
  description: string;
}

export const TIPS_DATA: Tips = {
  debug: [
    {
      options: ['show-fps'],
      description: 'FPS/UPS',
    },
    {
      options: ['show-multiplayer-statistics'],
      description: 'Latency',
    },
    {
      options: ['show-tile-grid', 'show-raw-tile-transitions'],
      description: 'Precision construction',
    },
    {
      options: ['show-rail-paths'],
      description: 'Less likely to get run over',
    },
    {
      options: ['show-transport-line-gaps'],
      description: 'Identify unsaturated belts',
    },
    {
      options: ['show-player-robots'],
      description: 'Makes it clear if there are stragglers',
    },
    {
      options: ['allow-increased-zoom'],
      description: '',
    },
    {
      options: ['hide-frozen-icon'],
      description: '',
    },
  ],
};
