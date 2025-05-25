import { Component, Input } from '@angular/core';

import { FactorioIcons } from '../factorio-icons.enum';

export interface RatioItem {
  machineIconId: FactorioIcons;
  productIconId: FactorioIcons;
  count?: number;
  rateSeconds?: number;
}

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
})
export class RatioComponent {
  @Input()
  public ratios: RatioItem[] = [
    {
      machineIconId: FactorioIcons.Icons_AssemblingMachine3,
      productIconId: FactorioIcons.Icons_AutomationSciencePack,
      count: 10,
      rateSeconds: 2.5,
    },
    {
      machineIconId: FactorioIcons.Icons_AssemblingMachine3,
      productIconId: FactorioIcons.Icons_IronGearWheel,
      count: 1,
    },
  ];
}
