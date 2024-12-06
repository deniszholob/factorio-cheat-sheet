import { Component } from '@angular/core';
import { DataService } from 'app/services';

import { COMMON_RATIO_DATA, RatioSection } from './common-ratios.data';
import { MACHINE_SPEEDS, MachineSpeeds } from './machine-speeds.data';
import { Ratio } from './ratio.model';
import { ROCKET_RATIO_DATA } from './rocket-ratios.data';

@Component({
  selector: 'app-cs-common-ratios',
  templateUrl: './cs-common-ratios.component.html',
})
export class CsCommonRatiosComponent {
  public readonly cheatSheetIconId: string = 'Repair_pack';
  public readonly cheatSheetTitle: string = 'Common Ratios';

  public ROCKET_RATIO_DATA: Ratio[] = ROCKET_RATIO_DATA;
  public COMMON_RATIO_DATA: RatioSection[] = COMMON_RATIO_DATA;
  public MACHINE_SPEEDS: MachineSpeeds[] = MACHINE_SPEEDS;

  constructor(public dataService: DataService) {}
}
