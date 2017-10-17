// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';
import { SheetCollapseToggleService } from 'app/services/sheet-collapse-toggle.service';

// Constants
const dataFile = 'nav';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'] // Enable as needed
})
export class NavComponent implements OnInit {
    isNavOpen: boolean;
    sheetIds: string[];

    constructor(
        public dataService: DataService,
        private sheetCollapseToggleService: SheetCollapseToggleService
    ) { }

    /** Get Nav Data: sheet id's to anchor link to */
    ngOnInit() {
        this.dataService.GET<string[]>(dataFile).subscribe(
            (result: string[]) => {
                this.sheetIds = result;
            },
            error => {
                console.log(error);
            }
        );
        this.closeNav();
    }

    /** Expand the sheet jumped to and close the nav */
    clickedLink(id: string){
        this.sheetCollapseToggleService.expandId(id);
        this.closeNav();
    }

    closeNav() { this.isNavOpen = false; }

    openNav() { this.isNavOpen = true; }

    toggleNav() { this.isNavOpen = !this.isNavOpen; }

    sheetName(id) {
        return this.dataService.toTitleCase(id.replace(/-/g, ' '));
    }

    collapseAllSheets() {
        this.sheetCollapseToggleService.collapseAll();
    }

    expandAllSheets() {
        this.sheetCollapseToggleService.expandAll();
    }
}
