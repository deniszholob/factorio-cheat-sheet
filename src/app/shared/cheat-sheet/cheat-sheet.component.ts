// Angular Imports
import { Component, OnInit, Input } from '@angular/core';

import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

@Component({
    selector: 'app-cheat-sheet',
    templateUrl: './cheat-sheet.component.html',
    // styleUrls: ['./cheat-sheet.component.scss'] // Enable as Needed
})
export class CheatSheetComponent implements OnInit {

    @Input() cheatSheet: CheatSheet;

    constructor() {
    }

    ngOnInit() {
    }

}
