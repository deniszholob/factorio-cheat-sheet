export interface ProductivityModulePayoffsData {
  payoffs: Payoff[];
}

export interface Payoff {
  product: string;
  description: string;
  payoff_speed_prod: string;
  payoff_prod: string;
  payoff_beacon_8x8: string;
  payoff_beacon_12: string;
}
