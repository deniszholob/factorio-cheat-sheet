// Angular Imports
import { Component, OnInit } from '@angular/core';
// Models
import { Data } from 'app/models/Data.model';
import { LinksData } from 'app/models/LinksData.model';
// Services
import { DataService } from 'app/services/data.service';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { LINKS_DATA } from './links.data';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  //   styleUrls: ['./links.component.scss'] // Enable as needed
})
export class LinksComponent implements OnInit {
  cheatSheet?: CheatSheet;
  sheetData?: LinksData;

  constructor(public dataService: DataService) {}

  /** Get Data for the Cheat Sheet from the DataService */
  ngOnInit() {
    this.dataService.getLocalCheatSheetData<LinksData>(LINKS_DATA).subscribe(
      (result: Data<LinksData>) => {
        this.cheatSheet = result.cheatSheet;
        this.sheetData = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
