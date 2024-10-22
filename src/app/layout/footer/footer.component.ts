// Angular Imports
import { Component } from '@angular/core';

// Constants
import { APP_UPDATE_DATE } from 'app/app-update';
import { AppInfo, APP_INFO } from 'app/shared/app-settings';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public readonly APP_INFO: AppInfo = APP_INFO;
  public readonly APP_UPDATE_DATE: string = APP_UPDATE_DATE;
}
