export enum Planets {
  Vulcanus = 'Vulcanus',
  Nauvis = 'Nauvis',
  Fulgora = 'Fulgora',
  Gleba = 'Gleba',
  Aquilo = 'Aquilo',
  SolarSystemEdge = 'SolarSystemEdge',
  ShatteredPlanet = 'ShatteredPlanet',
}

export const PLANETS_OPTIONS: Planets[] = Object.values(Planets);

export function isPlanets(value: string): value is Planets {
  return PLANETS_OPTIONS.includes(value as Planets);
}
