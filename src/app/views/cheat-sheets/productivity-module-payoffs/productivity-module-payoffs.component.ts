// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'productivity-module-payoffs';

interface PayoffData {
    product: string;
    description: string;
    payoff_speed_prod: string;
    payoff_prod: string;
    payoff_beacon_8x8: string;
    payoff_beacon_12: string;
}

@Component({
    selector: 'app-productivity-module-payoffs',
    templateUrl: './productivity-module-payoffs.component.html',
    //   styleUrls: ['./productivity-module-payoffs.component.scss'] // Enable as needed
})
export class ProductivityModulePayoffsComponent implements OnInit {
    public cheatSheet: CheatSheet;
    public sheetData: PayoffData[];

    constructor(
        public dataService: DataService,
    ) { }

    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => { console.log(error); }
        );
    }
}
