// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'productivity-module-payoffs';

@Component({
    selector: 'app-productivity-module-payoffs',
    templateUrl: './productivity-module-payoffs.component.html',
    //   styleUrls: ['./productivity-module-payoffs.component.scss'] // Enable as needed
})
export class ProductivityModulePayoffsComponent implements OnInit {
    cheatSheet: CheatSheet;
    tableData: any;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.tableData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }
}
