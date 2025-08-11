import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from 'app/services';
import { FactorioIconModule, RatioModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

import { COMMON_RATIO_DATA, RatioSection } from './common-ratios.data';
import { MACHINE_SPEEDS, MachineSpeeds } from './machine-speeds.data';
import { Ratio } from './ratio.model';
import { ROCKET_RATIO_DATA } from './rocket-ratios.data';

export const COMMON_RATIOS_SHEET_NAV: NavData = newNavData(
  'Common Ratios',
  FactorioIcons.Icons_RepairPack
);

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
  public readonly cheatSheetIconId: FactorioIcons =
    COMMON_RATIOS_SHEET_NAV.sheetIconId;
  public readonly cheatSheetTitle: string = COMMON_RATIOS_SHEET_NAV.title;

  public ROCKET_RATIO_DATA: Ratio[] = ROCKET_RATIO_DATA;
  public COMMON_RATIO_DATA: RatioSection[] = COMMON_RATIO_DATA;
  public MACHINE_SPEEDS: MachineSpeeds[] = MACHINE_SPEEDS;

  constructor(public dataService: DataService) {}
}
