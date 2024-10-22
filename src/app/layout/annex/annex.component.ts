// Angular Imports
import { Component } from '@angular/core';

// Constants
import { AppInfo, APP_INFO } from 'app/shared/app-settings';

@Component({
  selector: 'app-annex',
  templateUrl: './annex.component.html',
})
export class AnnexComponent {
  public readonly APP_INFO: AppInfo = APP_INFO;
}
