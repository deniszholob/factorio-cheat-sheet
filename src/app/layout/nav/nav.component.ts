// Angular Imports
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DataService } from 'app/services/data.service';
import { SheetCollapseToggleService } from 'app/services/sheet-collapse-toggle.service';
import { Subject, takeUntil } from 'rxjs';

// Constants
import { navMatchFilter } from '../util';
import { NAV_ANCHOR_TAGS } from './nav.data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'], // Enable as needed
})
export class NavComponent implements OnInit, OnDestroy {
  private readonly clearSub$ = new Subject<void>();
  public isNavOpen: boolean = false;
  public sheetIds: string[] = [];
  private isUserOpen: boolean = false;
  private maxWidthToKeepOpen = 1366; // In pixels, keep the same as breakpoint in styles.scss

  constructor(
    public dataService: DataService,
    private sheetCollapseToggleService: SheetCollapseToggleService,
    router: Router
  ) {
    navMatchFilter(router)
      .pipe(takeUntil(this.clearSub$))
      .subscribe((key) => {
        this.sheetIds = NAV_ANCHOR_TAGS[key];
      });
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
