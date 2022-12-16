// Angular Imports
import { Component, OnInit } from '@angular/core';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
import { APP_UPDATE_DATE } from 'app/app-update';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  //   styleUrls: ['./footer.component.scss'] // Enable as needed
})
export class FooterComponent {
  public APP_SETTINGS = APP_SETTINGS;
  public APP_UPDATE_DATE = APP_UPDATE_DATE;
}
