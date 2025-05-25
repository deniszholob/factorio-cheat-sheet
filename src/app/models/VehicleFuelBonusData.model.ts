import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface VehicleFuelBonusData {
  fuelData: FuelData[];
  speedWithWagons: SpeedWithWagon[];
  accelerationTimes: AccelerationTimes;
}

export interface FuelData {
  title: string;
  icon: FactorioIcons;
  energy: string;
  stackEnergy: string;
  accelerationBonus: string;
  speedBonus: string;
  trainTopSpeed: string;
}

export interface SpeedWithWagon {
  wagons: number;
  basicFuel: number;
  solidFuel: number;
  rocketFuel: number;
}

export interface AccelerationTimes {
  'S-1-4-1': AccelerationTime[];
  'S-1-10-1': AccelerationTime[];
}

export interface AccelerationTime {
  speed: number;
  timeBasic: string;
  timeSolid: string;
  timeRocket: string;
}
