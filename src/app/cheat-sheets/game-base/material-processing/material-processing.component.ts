// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { MaterialProcessingData } from 'app/models/MaterialProcessingData.model';

// Constants
import { MATERIAL_PROCESSING_DATA } from './material-processing.data';

@Component({
  selector: 'app-material-processing',
  templateUrl: './material-processing.component.html',
  styleUrls: ['./material-processing.component.scss'], // Enable as needed
})
export class MaterialProcessingComponent implements OnInit {
  cheatSheet?: CheatSheet;
  sheetData?: MaterialProcessingData;

  constructor(public dataService: DataService) {}

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    this.dataService
      .getLocalCheatSheetData<MaterialProcessingData>(MATERIAL_PROCESSING_DATA)
      .subscribe(
        (result: Data<MaterialProcessingData>) => {
          this.cheatSheet = result.cheatSheet;
          this.sheetData = result.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
