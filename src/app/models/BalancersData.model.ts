export interface BalancerData {
  commonBalancers: CommonBalancer[];
}

export interface CommonBalancer {
  name: string;
  url: string;
  raw: string;
}
