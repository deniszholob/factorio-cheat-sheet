// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'common-ratios';

@Component({
    selector: 'app-common-ratios',
    templateUrl: './common-ratios.component.html',
    styleUrls: ['./common-ratios.component.scss'] // Enable as needed
})
export class CommonRatiosComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: any;

    constructor(
        public dataService: DataService
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
