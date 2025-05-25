import { SimpleRatio } from 'app/data';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface PowerSteamData {
  steamBuildRatio: SteamBuildRatio;
  offshorePumpWater: number;
  steamBoilerWater: number;
  steamBoilerSteam: number;
  steamBoilerEnergyMj: number;
  steamEngineSteam: number;
  steamEnginePowerMw: number;
}

interface SteamBuildRatio {
  steamRatioPowerMw: number;
  steamRatio: SimpleRatio[];
}

export const POWER_STEAM_DATA: PowerSteamData = {
  // TODO: Calculate?
  steamBuildRatio: {
    steamRatioPowerMw: 360,
    steamRatio: [
      {
        iconId: FactorioIcons.Icons_OffshorePump,
        count: 1,
      },
      {
        iconId: FactorioIcons.Icons_Boiler,
        count: 200,
      },
      {
        iconId: FactorioIcons.Icons_SteamEngine,
        count: 400,
      },
      {
        iconId: FactorioIcons.Icons_ElectricMiningDrill,
        count: 180,
      },
      {
        iconId: FactorioIcons.Icons_TransportBelt,
        count: 6,
      },
    ],
  },
  offshorePumpWater: 1200,
  steamBoilerWater: 6,
  steamBoilerSteam: 60,
  steamBoilerEnergyMj: 1.8,
  steamEngineSteam: 30,
  steamEnginePowerMw: 0.9,
};
