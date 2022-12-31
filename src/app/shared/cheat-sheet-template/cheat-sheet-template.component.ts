import { Component, Input, OnDestroy } from '@angular/core';
import {
  Collapse,
  DataService,
  SheetCollapseToggleService,
} from 'app/services';
import { Subject, takeUntil } from 'rxjs';
import { FactorioIcon } from '../factorio-icon/factorio-icon.model';

const CHT_BREAKPOINT_RESOLUTION = 767; // pixels
export const CHT_DEFAULT_TITLE = 'Cheat Sheet';
export const CHT_DEFAULT_ICON_ID = 'Blueprint';

@Component({
  selector: 'app-cheat-sheet-template',
  templateUrl: './cheat-sheet-template.component.html',
})
export class CheatSheetTemplateComponent implements OnDestroy {
  @Input()
  public set iconId(iconId: string) {
    this.factorioIcon = this.dataService.getFactorioIcon(iconId);
  }
  private _title: string = CHT_DEFAULT_TITLE;
  @Input()
  public set title(title: string) {
    this._title = title;
    this.id = this.updateId();
  }

  public get title(): string {
    return this._title;
  }

  public factorioIcon: FactorioIcon =
    this.dataService.getFactorioIcon(CHT_DEFAULT_ICON_ID);

  public id: string = this.updateId();
  public isCollapsed: boolean = this.defaultCollapsed();

  private clearSub$ = new Subject<void>();

  constructor(
    private dataService: DataService,
    sheetCollapseToggleService: SheetCollapseToggleService
  ) {
    sheetCollapseToggleService
      .getCollapseToggle()
      .pipe(takeUntil(this.clearSub$))
      .subscribe((collapseObj: Collapse) => {
        if ((collapseObj.id && collapseObj.id === this.id) || !collapseObj.id) {
          collapseObj.doCollapse ? this.collapse() : this.expand();
        }
      });
  }

  ngOnDestroy(): void {
    this.clearSub$.next();
    this.clearSub$.complete();
  }

  /** Collapsed By default on Mobile, expanded on Desktop */
  private defaultCollapsed() {
    return window.innerWidth < CHT_BREAKPOINT_RESOLUTION;
  }

  /** Toggle the isCollapsed Flag */
  public toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  /** Collapse the sheet by setting isCollapsed Flag true */
  public collapse() {
    this.isCollapsed = true;
  }

  /** Expand the sheet by setting isCollapsed Flag false */
  public expand() {
    this.isCollapsed = false;
  }

  /** Convert string to lowercase dashed sting */
  private updateId(): string {
    return this.title.replace(/ /g, '-').toLocaleLowerCase();
  }
}
