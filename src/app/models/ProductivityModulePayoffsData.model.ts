import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface ProductivityModulePayoffsData {
  payoffs: Payoff[];
}

export interface Payoff {
  productIconId: FactorioIcons;
  description: string;
  payoff_speed_prod: string;
  payoff_prod: string;
  payoff_beacon_4x4: string;
  payoff_beacon_12: string;
}
