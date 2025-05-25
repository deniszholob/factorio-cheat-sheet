import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BELT_DATA, BeltData } from 'app/data';
import { DataService } from 'app/services/data.service';
import { FactorioIconModule } from 'app/shared';
import { APP_INFO, AppInfo } from 'app/shared/app-settings';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const BELTS_SHEET_ICON = FactorioIcons.Icons_TransportBelt;
export const BELTS_SHEET_TITLE = 'Belts';

@Component({
  selector: 'app-belts',
  templateUrl: './belts.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [CommonModule, CheatSheetTemplateComponent, FactorioIconModule],
})
export class BeltsComponent {
  protected readonly cheatSheetIconId: FactorioIcons = BELTS_SHEET_ICON;
  protected readonly cheatSheetTitle: string = BELTS_SHEET_TITLE;

  protected readonly APP_INFO: AppInfo = APP_INFO;
  protected readonly BELT_DATA: BeltData = BELT_DATA;

  constructor(protected dataService: DataService) {}
}
