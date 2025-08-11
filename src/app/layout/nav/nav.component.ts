// Angular Imports
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// Services
import { DataService } from 'app/services/data.service';
import { SheetCollapseToggleService } from 'app/services/sheet-collapse-toggle.service';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData } from 'app/shared/nav-data/nav-data.model';
import { Subject } from 'rxjs';

// import { Subject, takeUntil } from 'rxjs';
// Constants
// import { navMatchFilter } from '../util';
import { NAV_SHEET_DATA } from './nav.data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'], // Enable as needed
})
export class NavComponent implements OnInit, OnDestroy {
  protected readonly FactorioIcons = FactorioIcons;
  private readonly clearSub$ = new Subject<void>();
  public isNavOpen: boolean = false;
  public navSheetData: NavData[] = [];
  private isUserOpen: boolean = false;
  private maxWidthToKeepOpen = 1366; // In pixels, keep the same as breakpoint in styles.scss

  constructor(
    public dataService: DataService,
    private sheetCollapseToggleService: SheetCollapseToggleService // router: Router
  ) {
    // Uncomment if using mods pages
    // navMatchFilter(router)
    //   .pipe(takeUntil(this.clearSub$))
    //   .subscribe((key) => {
    //     console.log(key)
    //     this.sheetIds = NAV_ANCHOR_TAGS[key];
    //   });

    this.navSheetData = NAV_SHEET_DATA.base;
  }

  /** Get Nav Data: sheet id's to anchor link to */
  ngOnInit() {
    this.onResize();
    this.closeNav();
  }

  ngOnDestroy(): void {
    this.clearSub$.next();
    this.clearSub$.complete();
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

  public sheetName(id: string) {
    return this.dataService.toTitleCase(id.replace(/-/g, ' '));
  }

  public collapseAllSheets() {
    this.sheetCollapseToggleService.collapseAll();
  }

  public expandAllSheets() {
    this.sheetCollapseToggleService.expandAll();
  }
}
