// Angular Imports
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  CHEAT_SHEET_CATEGORIES,
  CheatSheetCategory,
} from 'app/cheat-sheets/cheat-sheets.module';
import { Subject, takeUntil } from 'rxjs';

import { navMatchFilter } from '../util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnDestroy {
  private readonly clearSub$ = new Subject<void>();
  public readonly CHEAT_SHEET_CATEGORIES = CHEAT_SHEET_CATEGORIES;
  public categorySelection: CheatSheetCategory = 'base';

  constructor(private router: Router) {
    navMatchFilter(this.router)
      .pipe(takeUntil(this.clearSub$))
      .subscribe((key: CheatSheetCategory): void => {
        this.categorySelection = key;
      });
  }

  ngOnDestroy(): void {
    this.clearSub$.next();
    this.clearSub$.complete();
  }

  public updateCategory(): void {
    this.router.navigate([this.categorySelection.toLowerCase()], {
      fragment: 'cheat-sheets', // No need to go to the top of the page, all the content is below
    });
  }
}
