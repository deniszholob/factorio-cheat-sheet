import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'app/services';
import { FactorioIconModule, RatioModule } from 'app/shared';
import { APP_INFO, AppInfo } from 'app/shared/app-settings';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { SPACE_AGE_DATA } from './space-age.data';
import { SpaceAgeData } from './space-age.model';

export const SPACE_AGE_SHEET_ICON = FactorioIcons.Icons_SpaceAge;
export const SPACE_AGE_SHEET_TITLE = 'Space Age';

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
  protected readonly cheatSheetIconId: FactorioIcons = SPACE_AGE_SHEET_ICON;
  protected readonly cheatSheetTitle: string = SPACE_AGE_SHEET_TITLE;

  protected readonly APP_INFO: AppInfo = APP_INFO;
  protected readonly SPACE_AGE_DATA: SpaceAgeData = SPACE_AGE_DATA;

  constructor(protected dataService: DataService) {}
}
