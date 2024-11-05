import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'app/services';
import { APP_INFO, AppInfo } from 'app/shared/app-settings';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';
import { SpaceAgeData } from './space-age.model';
import { SPACE_AGE_DATA } from './space-age.data';
import { FactorioIconModule, RatioModule } from 'app/shared';

@Component({
  selector: 'app-space-age',
  templateUrl: './space-age.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CheatSheetTemplateModule,
    FactorioIconModule,
    RatioModule,
  ],
})
export class SpaceAgeComponent {
  protected readonly cheatSheetIconId: string = 'Space_Age';
  protected readonly cheatSheetTitle: string = 'Space Age';

  protected readonly APP_INFO: AppInfo = APP_INFO;
  protected readonly SPACE_AGE_DATA: SpaceAgeData = SPACE_AGE_DATA;

  constructor(protected dataService: DataService) {}
}
