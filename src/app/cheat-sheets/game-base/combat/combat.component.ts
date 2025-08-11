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

export const COMBAT_SHEET_NAV: NavData = newNavData(
  'Combat',
  FactorioIcons.Icons_ArtilleryTurret
);

const cheatSheet = {
  title: COMBAT_SHEET_NAV.title,
  icon: COMBAT_SHEET_NAV.sheetIconId,
};

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  // styleUrls: ['./combat.component.scss'] // Enable as needed
})
export class CombatComponent implements OnInit {
  public cheatSheet?: CheatSheet;

  APP_INFO = APP_INFO;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.cheatSheet = new CheatSheet(
      this.dataService.getFactorioIcon(cheatSheet.icon),
      cheatSheet.title
    );
  }
}
