// Angular Imports
import { Component, OnInit } from '@angular/core';
// Models
import { Data } from 'app/models/Data.model';
import { OilRefiningData } from 'app/models/OilRefiningData.model';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

import { OIL_REFINING_DATA } from './oil-refining.data';

@Component({
  selector: 'app-oil-refining',
  templateUrl: './oil-refining.component.html',
  // styleUrls: ['./oil-refining.component.scss'] // Enable as needed
})
export class OilRefiningComponent implements OnInit {
  cheatSheet?: CheatSheet;
  sheetData?: OilRefiningData;

  APP_INFO = APP_INFO;

  constructor(public dataService: DataService) {}

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<OilRefiningData>(OIL_REFINING_DATA)
      .subscribe(
        (result: Data<OilRefiningData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
