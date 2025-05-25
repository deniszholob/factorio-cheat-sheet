// Angular Imports
import { Component, OnInit } from '@angular/core';
// Models
import { Data } from 'app/models/Data.model';
import {
  Payoff,
  ProductivityModulePayoffsData,
} from 'app/models/ProductivityModulePayoffsData.model';
// Services
import { DataService } from 'app/services/data.service';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
// RXJS
import { BehaviorSubject, combineLatest } from 'rxjs';

// Constants
import { PRODUCTIVITY_MODULE_PAYOFFS_DATA } from './productivity-module-payoffs.data';

// Data Table Ref:
// https://blog.angularindepth.com/angular-cdk-tables-1537774d7c99
// https://material.angular.io/cdk/table/overview#connecting-the-table-to-a-data-source

@Component({
  selector: 'app-productivity-module-payoffs',
  templateUrl: './productivity-module-payoffs.component.html',
  //   styleUrls: ['./productivity-module-payoffs.component.scss'] // Enable as needed
})
export class ProductivityModulePayoffsComponent implements OnInit {
  protected readonly FactorioIcons = FactorioIcons;

  public cheatSheet?: CheatSheet;

  public displayedColumns = [
    'product',
    'payoff_speed_prod',
    'payoff_prod',
    'payoff_beacon_4x4',
    'payoff_beacon_12',
  ];

  // Sorting Variables
  public tableDataSource$ = new BehaviorSubject<Payoff[]>([]);
  public sortKey$ = new BehaviorSubject<keyof Payoff>('payoff_speed_prod');
  public sortDirection$ = new BehaviorSubject<'asc' | 'desc'>('asc');

  // Pagination Variables
  public currentPage$ = new BehaviorSubject<number>(1);
  public pageSize$ = new BehaviorSubject<number>(10);
  public dataOnPage$ = new BehaviorSubject<Payoff[]>([]);

  constructor(public dataService: DataService) {}

  ngOnInit() {
    //  Pagination Subscription
    combineLatest([
      this.tableDataSource$,
      this.currentPage$,
      this.pageSize$,
    ]).subscribe(([allSources, currentPage, pageSize]) => {
      const startingIndex = (currentPage - 1) * pageSize;
      const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
      this.dataOnPage$.next(onPage);
    });

    // Data/Sorting Subscription
    combineLatest([
      this.dataService.getLocalCheatSheetData<ProductivityModulePayoffsData>(
        PRODUCTIVITY_MODULE_PAYOFFS_DATA
      ),
      this.sortKey$,
      this.sortDirection$,
    ]).subscribe(
      ([newData, sortKey, sortDirection]: [
        Data<ProductivityModulePayoffsData>,
        keyof Payoff,
        string
      ]) => {
        this.cheatSheet = newData.cheatSheet;
        const data: Payoff[] = newData.data.payoffs;

        // Sort the incoming data
        const sorted = data.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) {
            return sortDirection === 'asc' ? 1 : -1;
          }
          if (a[sortKey] < b[sortKey]) {
            return sortDirection === 'asc' ? -1 : 1;
          }
          return 0;
        });

        this.tableDataSource$.next(sorted);
      }
    );
  }

  /**
   * Adjusts the sorting arrows for the target column
   * @param key column data variable name
   */
  public adjustSort(key: keyof Payoff) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }

    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }
}
