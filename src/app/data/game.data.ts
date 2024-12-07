// Do not import anything from other files into here to avoid circular dependencies

export interface PlanetTime {
  fullDayLength: number;
  dawnLength: number;
  dayLength: number;
  duskLength: number;
  nightLength: number;
}

/** Expressed as percentages */
export const DAY_TIME_RATIOS: PlanetTime = {
  fullDayLength: 100,
  dawnLength: 20,
  dayLength: 50,
  duskLength: 20,
  nightLength: 10,
};

export const TICKS_PER_SECOND = 60;
