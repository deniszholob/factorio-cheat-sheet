import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

import { MOD_LIST, ModGroup } from './popular-mods.data';

export const POPULAR_MODS_SHEET_NAV: NavData = newNavData(
  'Popular Mod List',
  FactorioIcons.Icons_Parametrise
  //FactorioIcons.ModManager_Cubes
);

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
  protected readonly cheatSheetIconId: FactorioIcons =
    POPULAR_MODS_SHEET_NAV.sheetIconId;
  protected readonly cheatSheetTitle: string = POPULAR_MODS_SHEET_NAV.title;

  public readonly MOD_LIST: ModGroup[] = MOD_LIST;

  public getModSearchLink(modName: string): string | undefined {
    if (modName.includes(' + ')) {
      return undefined;
    }
    return `https://mods.factorio.com/?query=${modName}`;
  }
}
