// Angular Imports
import { Component, OnInit } from '@angular/core';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

@Component({
    selector: 'app-annex',
    templateUrl: './annex.component.html',
    //   styleUrls: ['./annex.component.scss'] // Enable as needed
})
export class AnnexComponent implements OnInit {

    public APP_SETTINGS = APP_SETTINGS;

    constructor() { }

    ngOnInit() {
    }

}
