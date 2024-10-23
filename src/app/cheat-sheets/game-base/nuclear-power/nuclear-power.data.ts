import { RawData } from 'app/models/Data.model';
import { NuclearPowerData } from 'app/models/NuclearPowerData.model';

export const NUCLEAR_POWER_DATA: RawData<NuclearPowerData> = {
  cheatSheet: {
    title: 'Nuclear Power',
    icon: 'Nuclear_reactor',
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
        iconId: 'Nuclear_reactor',
        count: 1,
      },
      {
        iconId: 'Offshore_pump',
        count: 1,
      },
      {
        iconId: 'Heat_exchanger',
        count: 4,
      },
      {
        iconId: 'Steam_turbine',
        count: 7,
      },
    ],
    commonRatioPower: '480 MW',
    commonRatio: [
      {
        iconId: 'Nuclear_reactor',
        count: 4,
      },
      {
        iconId: 'Offshore_pump',
        count: 1,
      },
      {
        iconId: 'Heat_exchanger',
        count: 48,
      },
      {
        iconId: 'Steam_turbine',
        count: 84,
      },
    ],
    pumpRatioPower: '1160 MW',
    pumpRatio: [
      {
        iconId: 'Offshore_pump',
        count: 1,
      },
      {
        iconId: 'Heat_exchanger',
        count: 116.5,
      },
      {
        iconId: 'Steam_turbine',
        count: 200,
      },
    ],
  },
};
