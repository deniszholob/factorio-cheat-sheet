// SolarCalc utilities

import {
  ACCUMULATOR_DATA,
  Planets,
  PLANETS_INFO,
  PLANETS_OPTIONS,
  PLANETS_TIME,
  PlanetsInfo,
  PlanetTime,
  SOLAR_PANEL_DATA,
} from 'app/data';

export interface CalcData {
  planetTime: PlanetTime;
  locationEfficiencyFactor: number;
  solarPowerWatts: number;
  accumulatorEnergyJules: number;
}

export function solarAccumulatorRatioCalc(d: CalcData): number {
  const t: PlanetTime = d.planetTime;
  return (
    ((t.dayLength + t.dawnLength) / t.fullDayLength) *
    (t.nightLength +
      t.duskLength * ((t.dayLength + t.duskLength) / t.fullDayLength)) *
    ((d.solarPowerWatts * d.locationEfficiencyFactor) /
      d.accumulatorEnergyJules)
  );
}

export function effectiveSolarFactor(t: PlanetTime): number {
  const outputTimeDurationSeconds: number =
    t.dayLength + (t.dawnLength + t.duskLength) / 2;
  const effectiveOutputTimeRatio: number =
    outputTimeDurationSeconds / t.fullDayLength;
  return effectiveOutputTimeRatio;
}

export function effectiveSolarPower(d: CalcData): number {
  const effectiveOutputTimeRatio: number = effectiveSolarFactor(d.planetTime);
  return (
    effectiveOutputTimeRatio * d.solarPowerWatts * d.locationEfficiencyFactor
  );
}

export interface SolarAccumulatorRatio {
  planet: Planets;
  solarAccumulatorRatioGround: number;
  // solarAccumulatorRatioSpace: number;
  // effectiveSolarFactorGround: number;
  // effectiveSolarFactorSpace: number;
  effectiveSolarPowerGroundKw: number;
  effectiveSolarPowerSpaceKw: number;
}

export const SOLAR_ACCUMULATOR_PLANET_RATIOS: SolarAccumulatorRatio[] =
  PLANETS_OPTIONS.map((p: Planets): SolarAccumulatorRatio => {
    const tGround: PlanetTime = PLANETS_TIME[p];
    const tSpace: PlanetTime = {
      fullDayLength: 100,
      dawnLength: 0,
      dayLength: 100,
      duskLength: 0,
      nightLength: 0,
    };
    const i: PlanetsInfo = PLANETS_INFO[p];
    const dGround: CalcData = {
      planetTime: tGround,
      locationEfficiencyFactor: i.solarPercentEfficiencyGround / 100,
      solarPowerWatts: SOLAR_PANEL_DATA.basePowerKw * 1000,
      accumulatorEnergyJules: ACCUMULATOR_DATA.capacityMj * 1000 * 1000,
    };
    const dSpace: CalcData = {
      ...dGround,
      planetTime: tSpace,
      locationEfficiencyFactor: i.solarPercentEfficiencySpace / 100,
    };
    return {
      planet: p,
      solarAccumulatorRatioGround: solarAccumulatorRatioCalc(dGround),
      // solarAccumulatorRatioSpace: solarAccumulatorRatioCalc(dSpace), // 0
      // effectiveSolarFactorGround: effectiveSolarFactor(tGround), // 0.7
      // effectiveSolarFactorSpace: effectiveSolarFactor(tSpace), // 1
      effectiveSolarPowerGroundKw: effectiveSolarPower(dGround) / 1000,
      effectiveSolarPowerSpaceKw: effectiveSolarPower(dSpace) / 1000,
    };
  });
