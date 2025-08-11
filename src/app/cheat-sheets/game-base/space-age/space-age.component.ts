import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'app/services';
import { FactorioIconModule, RatioModule } from 'app/shared';
import { APP_INFO, AppInfo } from 'app/shared/app-settings';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

import { QUALITY_DISPLAY, QUALITY_OPTIONS } from './quality.enum';
import { QUALITY_QUALITY_TABLE } from './quality-quality-table.data';
import { SPACE_AGE_DATA } from './space-age.data';
import { SpaceAgeData } from './space-age.model';

export const SPACE_AGE_SHEET_NAV: NavData = newNavData(
  'Space Age',
  FactorioIcons.Icons_SpaceAge
);

@Component({
  selector: 'app-space-age',
  templateUrl: './space-age.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [
    CommonModule,
    CheatSheetTemplateComponent,
    FactorioIconModule,
    RatioModule,
  ],
})
export class SpaceAgeComponent {
  protected readonly FactorioIcons = FactorioIcons;
  protected readonly cheatSheetIconId: FactorioIcons =
    SPACE_AGE_SHEET_NAV.sheetIconId;
  protected readonly cheatSheetTitle: string = SPACE_AGE_SHEET_NAV.title;

  protected readonly APP_INFO: AppInfo = APP_INFO;
  protected readonly SPACE_AGE_DATA: SpaceAgeData = SPACE_AGE_DATA;

  protected readonly QUALITY_OPTIONS = QUALITY_OPTIONS;
  protected readonly QUALITY_DISPLAY = QUALITY_DISPLAY;
  protected readonly QUALITY_QUALITY_TABLE = QUALITY_QUALITY_TABLE;

  constructor(protected dataService: DataService) {}
}
