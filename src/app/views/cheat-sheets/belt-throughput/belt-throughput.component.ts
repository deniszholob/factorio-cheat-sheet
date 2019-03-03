// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const dataFile = 'belt-throughput';

@Component({
    selector: 'app-belt-throughput',
    templateUrl: './belt-throughput.component.html',
    // styleUrls: ['./belt-throughput.component.scss'] // Enable as needed
})
export class BeltThroughputComponent implements OnInit {
    public cheatSheet: CheatSheet;
    public sheetData: any;

    public APP_SETTINGS = APP_SETTINGS;

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
