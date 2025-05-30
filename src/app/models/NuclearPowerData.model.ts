import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface NuclearPowerData {
  reactorPowerMW: number;
  heatExchangerPowerMW: number;
  turbinePowerMW: number;
  heatExchangerWater: number;
  heatExchangerSteam: number;
  turbineSteam: number;
  simpleRatioPower: string;
  storageTanksPerReactor: number;
  simpleRatio: Ratio[];
  commonRatioPower: string;
  commonRatio: Ratio[];
  pumpRatioPower: string;
  pumpRatio: Ratio[];
}

export interface Ratio {
  iconId: FactorioIcons;
  count: number;
}
