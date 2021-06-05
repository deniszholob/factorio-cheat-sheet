// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/index';

// Models
import { Data } from 'app/definitions/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { BalancerData } from 'app/definitions/BalancersData.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
import { BALANCERS_DATA } from './balancers.data';

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
        this.dataService.getLocalCheatSheetData<BalancerData>(BALANCERS_DATA).subscribe(
            (result: Data<BalancerData>) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
