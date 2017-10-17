// Angular Imports
import { Component, OnInit } from '@angular/core';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'] // Enable as needed
})
export class OverviewComponent implements OnInit {

    public APP_SETTINGS = APP_SETTINGS;

    constructor() { }

    ngOnInit() {
    }

}
