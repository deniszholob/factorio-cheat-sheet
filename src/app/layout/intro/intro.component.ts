// Angular Imports
import { Component } from '@angular/core';
// Constants
import { APP_INFO, AppInfo } from 'app/shared/app-settings';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  public readonly APP_INFO: AppInfo = APP_INFO;
}
