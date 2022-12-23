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
  styleUrls: ['./nav.component.scss'], // Enable as needed
})
export class NavComponent implements OnInit {
  public isNavOpen: boolean = false;
  public sheetIds: string[] = [];
  private isUserOpen: boolean = false;
  private maxWidthToKeepOpen = 1366; // In pixels, keep the same as breakpoint in styles.scss

  constructor(
    public dataService: DataService,
    private sheetCollapseToggleService: SheetCollapseToggleService
  ) {}

  /** Get Nav Data: sheet id's to anchor link to */
  ngOnInit() {
    this.sheetIds = NAV_DATA;
    this.onResize();
    this.closeNav();
  }

  @HostListener('window:resize', ['$event'])
  protected onResize() {
    this.isNavOpen = this.isUserOpen || this.doKeepOpen();
  }

  public doKeepOpen(): boolean {
    return this.getViewportWidth() >= this.maxWidthToKeepOpen;
  }

  private getViewportWidth(): number {
    return window.innerWidth;
  }

  /** Expand the sheet jumped to and close the nav */
  public clickedLink(id: string) {
    this.sheetCollapseToggleService.expandId(id);
    this.closeNav();
  }

  public closeNav() {
    if (!this.doKeepOpen()) {
      this.isNavOpen = false;
      this.isUserOpen = this.isNavOpen;
    }
  }

  protected openNav() {
    this.isNavOpen = true;
  }

  public toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.isUserOpen = this.isNavOpen;
  }

  sheetName(id: string) {
    return this.dataService.toTitleCase(id.replace(/-/g, ' '));
  }

  public collapseAllSheets() {
    this.sheetCollapseToggleService.collapseAll();
  }

  public expandAllSheets() {
    this.sheetCollapseToggleService.expandAll();
  }
}
