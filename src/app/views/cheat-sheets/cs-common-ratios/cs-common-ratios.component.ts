import { Component } from '@angular/core';
import { DataService } from 'app/services';
import { COMMON_RATIO_DATA } from './common-ratios.data';
import { MACHINE_SPEEDS } from './machine-speeds.data';
import { Ratio } from './ratio.model';
import { ROCKET_RATIO_DATA } from './rocket-ratios.data';

@Component({
  selector: 'app-cs-common-ratios',
  templateUrl: './cs-common-ratios.component.html',
})
export class CsCommonRatiosComponent {
  public cheatSheetIconId = 'Repair_pack';
  public cheatSheetTitle = 'Common Ratios';

  public ROCKET_RATIO_DATA: Ratio[] = ROCKET_RATIO_DATA;
  public COMMON_RATIO_DATA = COMMON_RATIO_DATA;
  public MACHINE_SPEEDS = MACHINE_SPEEDS;

  constructor(public dataService: DataService) {}
}
