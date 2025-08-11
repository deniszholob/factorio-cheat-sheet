import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BELT_DATA, BeltInfo, BURNABLES_DATA, BurnablesData } from 'app/data';
import { DataService } from 'app/services';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIconData } from 'app/shared/factorio-icon/factorio-icon.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';
import { NavData, newNavData } from 'app/shared/nav-data/nav-data.model';

import { POWER_STEAM_DATA, PowerSteamData } from './power-steam.data';

export const POWER_STEAM_SHEET_NAV: NavData = newNavData(
  'Steam Power',
  FactorioIcons.Icons_SteamEngine
);

interface BoilerTableColumn extends FactorioIconData {
  iconId: FactorioIcons;
}

interface BoilerTableRow extends FactorioIconData {
  iconId: FactorioIcons;
  boilerCounts: number[];
}

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
  protected readonly cheatSheetIconId: FactorioIcons =
    POWER_STEAM_SHEET_NAV.sheetIconId;
  protected readonly cheatSheetTitle: string = POWER_STEAM_SHEET_NAV.title;

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
