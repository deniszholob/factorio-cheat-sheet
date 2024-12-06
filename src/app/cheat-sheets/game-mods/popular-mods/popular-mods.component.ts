import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';

import { MOD_LIST, ModGroup } from './popular-mods.data';

export const POPULAR_MODS_SHEET_ICON = 'Repair_pack';
export const POPULAR_MODS_SHEET_TITLE = 'Popular Mod List';

@Component({
  selector: 'app-popular-mods',
  templateUrl: './popular-mods.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [
    CommonModule,
    FactorioIconModule,
    CheatSheetTemplateComponent,
    RouterModule,
  ],
})
export class PopularModsComponent {
  protected readonly cheatSheetIconId: string = POPULAR_MODS_SHEET_ICON;
  protected readonly cheatSheetTitle: string = POPULAR_MODS_SHEET_TITLE;

  public readonly MOD_LIST: ModGroup[] = MOD_LIST;

  public getModSearchLink(modName: string): string | undefined {
    if (modName.includes(' + ')) {
      return undefined;
    }
    return `https://mods.factorio.com/?query=${modName}`;
  }
}
