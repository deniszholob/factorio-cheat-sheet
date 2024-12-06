// Angular Imports
import { Component, Input } from '@angular/core';
// Models
import { Collapse } from 'app/services/collapse.model';
// Services
import { SheetCollapseToggleService } from 'app/services/sheet-collapse-toggle.service';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
// RXJX Observables
import { Subscription } from 'rxjs';

/** @deprecated Use CheatSheetTemplateComponent instead */
@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  // styleUrls: ['./cheat-sheet.component.scss'] // Enable as Needed
})
export class CheatSheetComponent {
  @Input()
  public cheatSheet?: CheatSheet;

  /** Subscription from collapse service to collapse/expand cheat sheet contents */
  collapseSub: Subscription;

  constructor(private sheetCollapseToggleService: SheetCollapseToggleService) {
    this.collapseSub = this.sheetCollapseToggleService
      .getCollapseToggle()
      .subscribe((collapseObj: Collapse) => {
        if (this.cheatSheet) {
          // If not null, then need to match id, or if null, signifies all collapse
          if (
            (collapseObj.id && collapseObj.id === this.cheatSheet.id) ||
            !collapseObj.id
          ) {
            if (collapseObj.doCollapse) {
              this.cheatSheet.collapse();
            } else {
              this.cheatSheet.expand();
            }
          }
        }
      });
  }
}
