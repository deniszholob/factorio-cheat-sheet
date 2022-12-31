// Angular Imports
import { Component } from '@angular/core';

// Constants
import { AppInfo, APP_SETTINGS } from 'app/shared/app-settings';

@Component({
  selector: 'app-annex',
  templateUrl: './annex.component.html',
})
export class AnnexComponent {
  public readonly APP_SETTINGS: AppInfo = APP_SETTINGS;
}
