import { SimpleRatio } from 'app/data';

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
        iconId: 'Offshore_pump',
        count: 1,
      },
      {
        iconId: 'Boiler',
        count: 200,
      },
      {
        iconId: 'Steam_engine',
        count: 400,
      },
      {
        iconId: 'Electric_mining_drill',
        count: 180,
      },
      {
        iconId: 'Transport_belt',
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
