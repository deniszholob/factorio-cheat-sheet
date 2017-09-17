// Angular Imports
import { Component, OnInit } from '@angular/core';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    //   styleUrls: ['./intro.component.scss'] // Enable as needed
})
export class IntroComponent implements OnInit {

    public APP_SETTINGS = APP_SETTINGS;

    constructor() { }

    ngOnInit() {
    }

}
