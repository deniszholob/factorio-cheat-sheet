import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'app/services';
import { FactorioIconModule } from 'app/shared';
import { APP_INFO } from 'app/shared/app-settings';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

// import { TRAINS_DATA, TrainsData } from './trains.data';

export const TRAINS_SHEET_ICON = FactorioIcons.Icons_Locomotive;
export const TRAINS_SHEET_TITLE = 'Trains';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  // host: { class: 'contents' },
  standalone: true,
  imports: [CommonModule, CheatSheetTemplateComponent, FactorioIconModule],
})
export class TrainsComponent {
  protected readonly FactorioIcons = FactorioIcons;
  protected readonly cheatSheetIconId: FactorioIcons = TRAINS_SHEET_ICON;
  protected readonly cheatSheetTitle: string = TRAINS_SHEET_TITLE;

  protected readonly APP_INFO = APP_INFO;
  // protected readonly TRAINS_DATA: PowerSolarData = TRAINS_DATA;

  constructor(protected dataService: DataService) {}
}
