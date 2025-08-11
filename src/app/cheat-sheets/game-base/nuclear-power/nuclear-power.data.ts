import { RawData } from 'app/models/Data.model';
import { NuclearPowerData } from 'app/models/NuclearPowerData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const NUCLEAR_POWER_SHEET_NAV: NavData = newNavData(
  'Nuclear Power',
  FactorioIcons.Icons_NuclearReactor
);

export const NUCLEAR_POWER_DATA: RawData<NuclearPowerData> = {
  cheatSheet: {
    title: NUCLEAR_POWER_SHEET_NAV.title,
    iconId: NUCLEAR_POWER_SHEET_NAV.sheetIconId,
  },
  data: {
    reactorPowerMW: 40,
    heatExchangerPowerMW: 10,
    turbinePowerMW: 5.82,
    heatExchangerWater: 10.3,
    heatExchangerSteam: 103,
    turbineSteam: 60,
    simpleRatioPower: '40 MW',
    storageTanksPerReactor: 3.299,
    simpleRatio: [
      {
        iconId: FactorioIcons.Icons_NuclearReactor,
        count: 1,
      },
      {
        iconId: FactorioIcons.Icons_OffshorePump,
        count: 1,
      },
      {
        iconId: FactorioIcons.Icons_HeatBoiler,
        count: 4,
      },
      {
        iconId: FactorioIcons.Icons_SteamTurbine,
        count: 7,
      },
    ],
    commonRatioPower: '480 MW',
    commonRatio: [
      {
        iconId: FactorioIcons.Icons_NuclearReactor,
        count: 4,
      },
      {
        iconId: FactorioIcons.Icons_OffshorePump,
        count: 1,
      },
      {
        iconId: FactorioIcons.Icons_HeatBoiler,
        count: 48,
      },
      {
        iconId: FactorioIcons.Icons_SteamTurbine,
        count: 84,
      },
    ],
    pumpRatioPower: '1160 MW',
    pumpRatio: [
      {
        iconId: FactorioIcons.Icons_OffshorePump,
        count: 1,
      },
      {
        iconId: FactorioIcons.Icons_HeatBoiler,
        count: 116.5,
      },
      {
        iconId: FactorioIcons.Icons_SteamTurbine,
        count: 200,
      },
    ],
  },
};
