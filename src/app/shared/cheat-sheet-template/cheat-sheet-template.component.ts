import { Component, Input } from '@angular/core';
import { DataService } from 'app/services';
import { FactorioIcon } from '../factorio-icon/factorio-icon.model';

const CHT_BREAKPOINT_RESOLUTION = 767; // pixels
export const CHT_DEFAULT_TITLE = 'Cheat Sheet';
export const CHT_DEFAULT_ICON_ID = 'Blueprint';

@Component({
  selector: 'app-cheat-sheet-template',
  templateUrl: './cheat-sheet-template.component.html',
})
export class CheatSheetTemplateComponent {
  @Input()
  public set iconId(iconId: string) {
    this.factorioIcon = this.dataService.getFactorioIcon(iconId);
  }
  private _title: string = CHT_DEFAULT_TITLE;
  @Input()
  public set title(title: string) {
    this._title = title;
    this.id = this.getIdFromTitle(title);
  }

  public get title(): string {
    return this._title;
  }

  public factorioIcon: FactorioIcon =
    this.dataService.getFactorioIcon(CHT_DEFAULT_ICON_ID);

  public id: string = this.getIdFromTitle(this.title);
  public isCollapsed: boolean = this.defaultCollapsed();

  constructor(private dataService: DataService) {}

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
  private getIdFromTitle(title: string): string {
    return title.replace(/ /g, '-').toLocaleLowerCase();
  }
}
