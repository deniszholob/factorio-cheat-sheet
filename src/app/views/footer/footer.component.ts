// Angular Imports
import { Component, OnInit } from '@angular/core';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    //   styleUrls: ['./footer.component.scss'] // Enable as needed
})
export class FooterComponent implements OnInit {

    public APP_SETTINGS = APP_SETTINGS;

    constructor() { }

    ngOnInit() {
    }

}
