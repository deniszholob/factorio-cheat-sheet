// Angular Imports
import { Component, OnInit } from '@angular/core';
// Services
import { DataService } from 'app/services/data.service';
// Constants
import { APP_INFO } from 'app/shared/app-settings';
// Models
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
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

  APP_INFO = APP_INFO;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.cheatSheet = new CheatSheet(
      this.dataService.getFactorioIcon(cheatSheet.icon),
      cheatSheet.title
    );
  }
}
