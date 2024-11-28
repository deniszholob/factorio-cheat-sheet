import { BasicPowerData } from 'app/models/BasicPowerData.model';
import { RawData } from 'app/models/Data.model';

export const BASIC_POWER_DATA: RawData<BasicPowerData> = {
  cheatSheet: {
    title: 'Basic Power',
    icon: 'Accumulator',
  },
  data: {
    steamRatioPower: '360MW',
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
    solarRatioPower: '1MW',
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
    offshore_pump_water: 1200,
    steam_boiler_water: 6,
    steam_boiler_steam: 60,
    steam_boiler_energy: '1.8MJ',
    steam_engine_steam: 30,
    steam_engine_power: '0.9MW',
    solar_energy_max: 60,
    solar_energy_avg: 42,
    solar_energy_unit: 'kW',
  },
};
