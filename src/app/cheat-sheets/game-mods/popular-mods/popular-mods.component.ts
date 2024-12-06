import { Component } from '@angular/core';

import { MOD_LIST, ModGroup } from './popular-mods.data';

@Component({
  selector: 'app-popular-mods',
  templateUrl: './popular-mods.component.html',
})
export class PopularModsComponent {
  public readonly iconId: string = 'Repair_pack';
  public readonly title: string = 'Popular Mod List';
  public readonly MOD_LIST: ModGroup[] = MOD_LIST;

  public getModSearchLink(modName: string): string | undefined {
    if (modName.includes(' + ')) {
      return undefined;
    }
    return `https://mods.factorio.com/?query=${modName}`;
  }
}
