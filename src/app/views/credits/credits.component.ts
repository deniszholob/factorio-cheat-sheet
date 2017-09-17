// Angular Imports
import { Component, OnInit } from '@angular/core';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    //   styleUrls: ['./credits.component.scss'] // Enable as needed
})
export class CreditsComponent implements OnInit {

    public APP_SETTINGS = APP_SETTINGS;

    constructor() { }

    ngOnInit() {
    }

}
