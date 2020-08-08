// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/index';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { BalancerData } from 'app/definitions/Balancers';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

const dataFile = 'balancers';

@Component({
    selector: 'app-balancers',
    templateUrl: './balancers.component.html',
    styleUrls: ['./balancers.component.scss'] // Enable as needed
})
export class BalancersComponent implements OnInit {
    public cheatSheet: CheatSheet;
    public sheetData: BalancerData;
    public APP_SETTINGS = APP_SETTINGS;

    constructor(
        private dataService: DataService,
    ) { }

    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
