import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BELT_DATA, BeltInfo, BURNABLES_DATA, BurnablesData } from 'app/data';
import { DataService } from 'app/services';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIconData } from 'app/shared/factorio-icon/factorio-icon.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

import { POWER_STEAM_DATA, PowerSteamData } from './power-steam.data';

interface BoilerTableColumn extends FactorioIconData {
  iconId: FactorioIcons;
}

interface BoilerTableRow extends FactorioIconData {
  iconId: FactorioIcons;
  boilerCounts: number[];
}

export const POWER_STEAM_SHEET_ICON = FactorioIcons.Icons_SteamEngine;
export const POWER_STEAM_SHEET_TITLE = 'Steam Power';

@Component({
  selector: 'app-power-steam',
  templateUrl: './power-steam.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  // host: { class: 'contents' },
  standalone: true,
  imports: [CommonModule, FactorioIconModule, CheatSheetTemplateComponent],
})
export class PowerSteamComponent {
  protected readonly FactorioIcons = FactorioIcons;
  protected readonly cheatSheetIconId: FactorioIcons = POWER_STEAM_SHEET_ICON;
  protected readonly cheatSheetTitle: string = POWER_STEAM_SHEET_TITLE;

  protected readonly POWER_STEAM_DATA: PowerSteamData = POWER_STEAM_DATA;

  protected boilerTableColumns: (BoilerTableColumn | undefined)[] = [
    undefined,
    ...BURNABLES_DATA.map(
      (burnable: BurnablesData): BoilerTableColumn => ({
        spaceAge: burnable.spaceAge,
        iconId: burnable.iconId,
        text:
          burnable.fuelEnergyMj > 1000
            ? `${burnable.fuelEnergyMj / 1000}GJ`
            : `${burnable.fuelEnergyMj}MJ`,
      })
    ),
  ];

  protected boilerTableRows: BoilerTableRow[] = BELT_DATA.beltInfo.map(
    (belt: BeltInfo): BoilerTableRow => ({
      spaceAge: belt.spaceAge,
      iconId: belt.iconId,
      boilerCounts: BURNABLES_DATA.map((burnable: BurnablesData): number =>
        Math.ceil(
          (belt.throughput * burnable.fuelEnergyMj) /
            POWER_STEAM_DATA.steamBoilerEnergyMj
        )
      ),
    })
  );

  constructor(protected dataService: DataService) {}
}
