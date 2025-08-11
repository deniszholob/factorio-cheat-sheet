// Angular Imports
import { Component, OnInit } from '@angular/core';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
// Models
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

export const TIPS_PAYOFFS_SHEET_NAV: NavData = newNavData(
  'Tips',
  FactorioIcons.Technology_SteelAxe
);

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  // styleUrls: ['./tips.component.scss'] // Enable as needed
})
export class TipsComponent implements OnInit {
  cheatSheet?: CheatSheet;

  APP_INFO = APP_INFO;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.cheatSheet = new CheatSheet(
      this.dataService.getFactorioIcon(TIPS_PAYOFFS_SHEET_NAV.sheetIconId),
      TIPS_PAYOFFS_SHEET_NAV.title
    );
  }
}
