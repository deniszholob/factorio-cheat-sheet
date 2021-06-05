// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/definitions/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { LinksData } from 'app/definitions/LinksData.model';

// Constants
import { LINKS_DATA } from './links.data';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    //   styleUrls: ['./links.component.scss'] // Enable as needed
})
export class LinksComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: LinksData;

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        this.dataService.getLocalCheatSheetData<LinksData>(LINKS_DATA).subscribe(
            (result: Data<LinksData>) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
