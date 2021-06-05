// Angular Imports
import { Component, OnInit, HostListener } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';
import { SheetCollapseToggleService } from 'app/services/sheet-collapse-toggle.service';

// Constants
import { NAV_DATA } from './nav.data';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'] // Enable as needed
})
export class NavComponent implements OnInit {
    public isNavOpen: boolean;
    public sheetIds: string[];
    private isUserOpen: boolean;
    private maxWidthToKeepOpen = 1366; // In pixels, keep the same as breakpoint in styles.scss

    constructor(
        public dataService: DataService,
        private sheetCollapseToggleService: SheetCollapseToggleService
    ) { }

    /** Get Nav Data: sheet id's to anchor link to */
    ngOnInit() {
      this.sheetIds = NAV_DATA;
      this.onResize(null);
        this.closeNav();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.isNavOpen = this.isUserOpen || this.doKeepOpen();
    }

    doKeepOpen(): boolean {
        return this.getViewportWidth() > this.maxWidthToKeepOpen;
    }

    private getViewportWidth(): number { return window.innerWidth; }

    /** Expand the sheet jumped to and close the nav */
    clickedLink(id: string) {
        this.sheetCollapseToggleService.expandId(id);
        this.closeNav();
    }

    closeNav() {
        if (!this.doKeepOpen()) {
            this.isNavOpen = false;
            this.isUserOpen = this.isNavOpen;
        }
    }

    openNav() { this.isNavOpen = true; }

    toggleNav() {
        this.isNavOpen = !this.isNavOpen;
        this.isUserOpen = this.isNavOpen;
    }

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
