// Angular Imports
import { Component } from '@angular/core';

// Constants
import { AppInfo, APP_SETTINGS } from 'app/shared/app-settings';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  public readonly APP_SETTINGS: AppInfo = APP_SETTINGS;
}
