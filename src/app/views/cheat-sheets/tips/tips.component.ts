// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const cheatSheet = {
    title: 'Tips',
    icon: 'Steel_axe'
};

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    // styleUrls: ['./tips.component.scss'] // Enable as needed
})
export class TipsComponent implements OnInit {
    APP_SETTINGS = APP_SETTINGS;
    cheatSheet: CheatSheet;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.cheatSheet = new CheatSheet(this.dataService.getFactorioIcon(cheatSheet.icon), cheatSheet.title);
    }

}
