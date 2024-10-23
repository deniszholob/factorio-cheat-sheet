export interface BasicPowerData {
  steamRatioPower: string;
  steamRatio: SteamRatio[];
  solarRatioPower: string;
  solarRatio: SolarRatio[];
  offshore_pump_water: number;
  steam_boiler_water: number;
  steam_boiler_steam: number;
  steam_boiler_energy: string;
  steam_engine_steam: number;
  steam_engine_power: string;
  solar_energy_max: number;
  solar_energy_avg: number;
  solar_energy_unit: string;
  boilerSupport: BoilerSupport[];
}

export interface SteamRatio {
  iconId: string;
  count: number;
}

export interface SolarRatio {
  iconId: string;
  count: number;
}

export interface BoilerSupport {
  fuel: string;
  fuelEnergy: string;
  beltYellow: number;
  beltRed: number;
  beltBlue: number;
}
