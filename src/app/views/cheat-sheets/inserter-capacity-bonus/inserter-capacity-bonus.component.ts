// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/definitions/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { InserterCapacityBonusData } from 'app/definitions/InserterCapacityBonusData.model';

// Constants
import { INSERTER_CAPACITY_BONUS_DATA } from './inserter-capacity-bonus.data';

@Component({
    selector: 'app-inserter-capacity-bonus',
    templateUrl: './inserter-capacity-bonus.component.html',
    // styleUrls: ['./inserter-capacity-bonus.component.scss'] // Enable as needed
})
export class InserterCapacityBonusComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: InserterCapacityBonusData;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.getLocalCheatSheetData<InserterCapacityBonusData>(INSERTER_CAPACITY_BONUS_DATA).subscribe(
            (result: Data<InserterCapacityBonusData>) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
