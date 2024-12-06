// Angular Imports
import { Component, OnInit } from '@angular/core';
import { BeltsData } from 'app/models/BeltsData.model';
// Models
import { Data } from 'app/models/Data.model';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

import { BELTS_DATA } from './belts.data';

@Component({
  selector: 'app-belts',
  templateUrl: './belts.component.html',
  // styleUrls: ['./belts.component.scss'] // Enable as needed
})
export class BeltsComponent implements OnInit {
  public cheatSheet?: CheatSheet;
  public sheetData?: BeltsData;

  public APP_INFO = APP_INFO;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getLocalCheatSheetData<BeltsData>(BELTS_DATA).subscribe(
      (result: Data<BeltsData>) => {
        this.cheatSheet = result.cheatSheet;
        this.sheetData = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
