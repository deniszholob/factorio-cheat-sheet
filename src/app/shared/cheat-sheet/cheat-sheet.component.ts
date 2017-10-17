// Angular Imports
import { Component, OnInit, Input } from '@angular/core';

// RXJX Observables
import { Subscription } from 'rxjs/Subscription';

// Services
import { SheetCollapseToggleService } from 'app/services/sheet-collapse-toggle.service';

// Models
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { Collapse } from 'app/services/collapse.model';

@Component({
    selector: 'app-cheat-sheet',
    templateUrl: './cheat-sheet.component.html',
    // styleUrls: ['./cheat-sheet.component.scss'] // Enable as Needed
})
export class CheatSheetComponent implements OnInit {

    @Input() cheatSheet: CheatSheet;

    /** Subscription from collapse service to collapse/expand cheat sheet contents */
    collapseSub: Subscription;

    constructor(
        private sheetCollapseToggleService: SheetCollapseToggleService
    ) {
        this.collapseSub = this.sheetCollapseToggleService.getCollapseToggle().subscribe(
            (collapseObj: Collapse) => {
                // If not null, then need to match id, or if null, signifies all collapse
                if (collapseObj.id && collapseObj.id === this.cheatSheet.id || !collapseObj.id) {
                    if (collapseObj.doCollapse) { this.cheatSheet.collapse(); }
                    else { this.cheatSheet.expand(); }
                }
            }
        );
    }

    ngOnInit() {
    }

}
