import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from 'app/services';
import { FactorioIconModule, RatioModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';

import { COMMON_RATIO_DATA, RatioSection } from './common-ratios.data';
import { MACHINE_SPEEDS, MachineSpeeds } from './machine-speeds.data';
import { Ratio } from './ratio.model';
import { ROCKET_RATIO_DATA } from './rocket-ratios.data';

export const CS_COMMON_RATIOS_SHEET_ICON = 'Repair_pack';
export const CS_COMMON_RATIOS_SHEET_TITLE = 'Common Ratios';

@Component({
  selector: 'app-cs-common-ratios',
  templateUrl: './cs-common-ratios.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [
    CommonModule,
    CheatSheetTemplateComponent,
    FactorioIconModule,
    RouterModule,
    RatioModule,
  ],
})
export class CsCommonRatiosComponent {
  public readonly cheatSheetIconId: string = CS_COMMON_RATIOS_SHEET_ICON;
  public readonly cheatSheetTitle: string = CS_COMMON_RATIOS_SHEET_TITLE;

  public ROCKET_RATIO_DATA: Ratio[] = ROCKET_RATIO_DATA;
  public COMMON_RATIO_DATA: RatioSection[] = COMMON_RATIO_DATA;
  public MACHINE_SPEEDS: MachineSpeeds[] = MACHINE_SPEEDS;

  constructor(public dataService: DataService) {}
}
