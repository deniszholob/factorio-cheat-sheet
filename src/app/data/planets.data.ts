import { DAY_TIME_RATIOS, PlanetTime } from './game.data';
import { Planets, PLANETS_OPTIONS } from './planets.enum';

export interface PlanetsInfo {
  id: Planets;
  display: string;
  icon: string;
  dayLengthSeconds: number;
  solarPercentEfficiencyGround: number;
  solarPercentEfficiencySpace: number;
}

export const PLANETS_INFO: Record<Planets, PlanetsInfo> = {
  [Planets.Vulcanus]: {
    id: Planets.Vulcanus,
    display: 'Vulcanus',
    icon: 'Vulcanus',
    dayLengthSeconds: 90,
    solarPercentEfficiencyGround: 400,
    solarPercentEfficiencySpace: 600,
  },
  [Planets.Nauvis]: {
    id: Planets.Nauvis,
    display: 'Nauvis',
    icon: 'Nauvis',
    dayLengthSeconds: 420,
    solarPercentEfficiencyGround: 100,
    solarPercentEfficiencySpace: 300,
  },
  [Planets.Fulgora]: {
    id: Planets.Fulgora,
    display: 'Fulgora',
    icon: 'Fulgora',
    dayLengthSeconds: 180,
    solarPercentEfficiencyGround: 20,
    solarPercentEfficiencySpace: 120,
  },
  [Planets.Gleba]: {
    id: Planets.Gleba,
    display: 'Gleba',
    icon: 'Gleba',
    dayLengthSeconds: 600,
    solarPercentEfficiencyGround: 50,
    solarPercentEfficiencySpace: 200,
  },
  [Planets.Aquilo]: {
    id: Planets.Aquilo,
    display: 'Aquilo',
    icon: 'Aquilo',
    dayLengthSeconds: 1200,
    solarPercentEfficiencyGround: 1,
    solarPercentEfficiencySpace: 60,
  },
  [Planets.SolarSystemEdge]: {
    id: Planets.SolarSystemEdge,
    display: 'Solar System Edge',
    icon: 'Solar_System_Edge',
    dayLengthSeconds: 0,
    solarPercentEfficiencyGround: 0,
    solarPercentEfficiencySpace: 1,
  },
  [Planets.ShatteredPlanet]: {
    id: Planets.ShatteredPlanet,
    display: 'Shattered Planet',
    icon: 'Shattered_Planet',
    dayLengthSeconds: 0,
    solarPercentEfficiencyGround: 0,
    solarPercentEfficiencySpace: 1,
  },
} as const;

export const PLANETS_INFO_OPTIONS: PlanetsInfo[] = PLANETS_OPTIONS.map(
  (o: Planets): PlanetsInfo => PLANETS_INFO[o]
);

export function getPlanetTime(
  planet: Planets,
  dayTimeRatios: PlanetTime = DAY_TIME_RATIOS
): PlanetTime {
  const planetInfo: PlanetsInfo = PLANETS_INFO[planet];
  const fullDayLength: number = planetInfo.dayLengthSeconds;
  return {
    fullDayLength,
    dawnLength: (dayTimeRatios.dawnLength * fullDayLength) / 100,
    dayLength: (dayTimeRatios.dayLength * fullDayLength) / 100,
    duskLength: (dayTimeRatios.duskLength * fullDayLength) / 100,
    nightLength: (dayTimeRatios.nightLength * fullDayLength) / 100,
  };
}

export const PLANETS_TIME: Record<Planets, PlanetTime> = {
  [Planets.Vulcanus]: getPlanetTime(Planets.Vulcanus),
  [Planets.Nauvis]: getPlanetTime(Planets.Nauvis),
  [Planets.Fulgora]: getPlanetTime(Planets.Fulgora),
  [Planets.Gleba]: getPlanetTime(Planets.Gleba),
  [Planets.Aquilo]: getPlanetTime(Planets.Aquilo),
  [Planets.SolarSystemEdge]: getPlanetTime(Planets.SolarSystemEdge),
  [Planets.ShatteredPlanet]: getPlanetTime(Planets.ShatteredPlanet),
};

export const PLANET_TIME_OPTIONS: PlanetTime[] = PLANETS_OPTIONS.map(
  (o: Planets): PlanetTime => PLANETS_TIME[o]
);
