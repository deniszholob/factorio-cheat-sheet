import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'app/services';
import { APP_INFO, AppInfo } from 'app/shared/app-settings';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';

@Component({
  selector: 'app-space-age',
  templateUrl: './space-age.component.html',
  standalone: true,
  imports: [CommonModule, CheatSheetTemplateModule],
})
export class SpaceAgeComponent {
  public readonly cheatSheetIconId: string = 'Space_Age';
  public readonly cheatSheetTitle: string = 'Space Age';

  protected readonly APP_INFO: AppInfo = APP_INFO;

  constructor(protected dataService: DataService) {}
}
