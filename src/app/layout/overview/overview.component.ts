// Angular Imports
import { Component } from '@angular/core';

// Constants
import { AppInfo, APP_SETTINGS } from 'app/shared/app-settings';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'], // Enable as needed
})
export class OverviewComponent {
  public readonly APP_SETTINGS: AppInfo = APP_SETTINGS;
}
