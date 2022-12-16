// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { CommonRatioData } from 'app/models/CommonRatiosData.model';

// Constants
import { COMMON_RATIO_DATA } from './common-ratios.data';

@Component({
  selector: 'app-common-ratios',
  templateUrl: './common-ratios.component.html',
  styleUrls: ['./common-ratios.component.scss'], // Enable as needed
})
export class CommonRatiosComponent implements OnInit {
  cheatSheet?: CheatSheet;
  sheetData?: CommonRatioData;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<CommonRatioData>(COMMON_RATIO_DATA)
      .subscribe(
        (result: Data<CommonRatioData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
