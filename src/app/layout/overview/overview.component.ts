// Angular Imports
import { Component } from '@angular/core';
// Constants
import { APP_INFO, AppInfo } from 'app/shared/app-settings';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'], // Enable as needed
})
export class OverviewComponent {
  public readonly APP_INFO: AppInfo = APP_INFO;
}
