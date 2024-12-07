import { SimpleRatio } from 'app/data';

export interface PowerSolarData {
  solarBuildRatio: SolarBuildRatio;
  solarEnergyMaxKw: number;
  solarEnergyAvgKw: number;
  /** Effective solar power due to no power at night */
  solarPowerEffectiveness: number;
}

interface SolarBuildRatio {
  solarRatioPowerMw: number;
  solarRatio: SimpleRatio[];
}

export const POWER_SOLAR_DATA: PowerSolarData = {
  solarBuildRatio: {
    solarRatioPowerMw: 1.05,
    solarRatio: [
      {
        iconId: 'Solar_panel',
        count: 25,
      },
      {
        iconId: 'Accumulator',
        count: 21,
      },
    ],
  },

  solarEnergyMaxKw: 60,
  solarEnergyAvgKw: 42,
  solarPowerEffectiveness: 0.7,
};
