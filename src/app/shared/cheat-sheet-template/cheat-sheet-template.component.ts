import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Collapse,
  DataService,
  SheetCollapseToggleService,
} from 'app/services';
import { Subject, takeUntil } from 'rxjs';

import { AdSenseModule } from '../ad-sense/ad-sense.module';
import { FactorioIcon } from '../factorio-icon/factorio-icon.model';
import { FactorioIconModule } from '../factorio-icon/factorio-icon.module';

const CHT_BREAKPOINT_RESOLUTION = 767; // pixels
export const CHT_DEFAULT_TITLE = 'Cheat Sheet';
export const CHT_DEFAULT_ICON_ID = 'Blueprint';

@Component({
  selector: 'app-cheat-sheet-template',
  templateUrl: './cheat-sheet-template.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [
    CommonModule,
    FactorioIconModule,
    AdSenseModule,
    NgbCollapseModule,
    RouterModule,
  ],
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

  @Input()
  public spaceAge: boolean = false;

  @Input()
  public animation: boolean = true;

  protected factorioIcon: FactorioIcon =
    this.dataService.getFactorioIcon(CHT_DEFAULT_ICON_ID);

  protected id: string = this.updateId();
  protected isCollapsed: boolean = this.defaultCollapsed();

  private clearSub$: Subject<void> = new Subject<void>();

  constructor(
    private dataService: DataService,
    sheetCollapseToggleService: SheetCollapseToggleService
  ) {
    sheetCollapseToggleService
      .getCollapseToggle()
      .pipe(takeUntil(this.clearSub$))
      .subscribe((collapseObj: Collapse): void => {
        if ((collapseObj.id && collapseObj.id === this.id) || !collapseObj.id) {
          collapseObj.doCollapse ? this.collapse() : this.expand();
        }
      });
  }

  public ngOnDestroy(): void {
    this.clearSub$.next();
    this.clearSub$.complete();
  }

  /** Collapsed By default on Mobile, expanded on Desktop */
  private defaultCollapsed(): boolean {
    return window.innerWidth < CHT_BREAKPOINT_RESOLUTION;
  }

  /** Toggle the isCollapsed Flag */
  protected toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  /** Collapse the sheet by setting isCollapsed Flag true */
  private collapse(): void {
    this.isCollapsed = true;
  }

  /** Expand the sheet by setting isCollapsed Flag false */
  private expand(): void {
    this.isCollapsed = false;
  }

  /** Convert string to lowercase dashed sting */
  private updateId(): string {
    return getIdFromTitle(this.title);
  }
}

export function getIdFromTitle(title: string): string {
  return title.replace(/ /g, '-').toLocaleLowerCase();
}
