import { SimpleRatio } from 'app/data';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

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
        iconId: FactorioIcons.Icons_SolarPanel,
        count: 25,
      },
      {
        iconId: FactorioIcons.Icons_Accumulator,
        count: 21,
      },
    ],
  },

  solarEnergyMaxKw: 60,
  solarEnergyAvgKw: 42,
  solarPowerEffectiveness: 0.7,
};
