// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const cheatSheet = {
  title: 'Combat',
  icon: 'Artillery_turret',
};

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  // styleUrls: ['./combat.component.scss'] // Enable as needed
})
export class CombatComponent implements OnInit {
  public cheatSheet?: CheatSheet;

  APP_SETTINGS = APP_SETTINGS;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.cheatSheet = new CheatSheet(
      this.dataService.getFactorioIcon(cheatSheet.icon),
      cheatSheet.title
    );
  }
}
