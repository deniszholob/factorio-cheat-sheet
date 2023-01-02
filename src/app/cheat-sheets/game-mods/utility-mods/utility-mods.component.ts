import { Component } from '@angular/core';
import { ModGroup, MOD_LIST } from './utility-mods.data';

@Component({
  selector: 'app-utility-mods',
  templateUrl: './utility-mods.component.html',
})
export class UtilityModsComponent {
  public readonly iconId: string = 'Repair_pack';
  public readonly title: string = 'Utility Mod List';
  public readonly MOD_LIST: ModGroup[] = MOD_LIST;

  public getModSearchLink(modName: string): string | undefined {
    if (modName.includes(' + ')) {
      return undefined;
    }
    return `https://mods.factorio.com/?query=${modName}`;
  }
}
