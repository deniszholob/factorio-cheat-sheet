// Angular Imports
import { Component } from '@angular/core';

// Constants
import { AppInfo, APP_INFO } from 'app/shared/app-settings';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  public readonly APP_INFO: AppInfo = APP_INFO;
}
