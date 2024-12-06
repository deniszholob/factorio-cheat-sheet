import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'app/services';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';

import { CalculatorSolarComponent } from './calculator-solar/calculator-solar.component';
import { POWER_SOLAR_DATA, PowerSolarData } from './power-solar.data';

export const POWER_SOLAR_SHEET_ICON = 'Solar_panel';
export const POWER_SOLAR_SHEET_TITLE = 'Solar Power';

@Component({
  selector: 'app-power-solar',
  templateUrl: './power-solar.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [
    CommonModule,
    FactorioIconModule,
    CheatSheetTemplateComponent,
    CalculatorSolarComponent,
  ],
})
export class PowerSolarComponent {
  protected readonly cheatSheetIconId: string = POWER_SOLAR_SHEET_ICON;
  protected readonly cheatSheetTitle: string = POWER_SOLAR_SHEET_TITLE;

  protected readonly POWER_SOLAR_DATA: PowerSolarData = POWER_SOLAR_DATA;

  constructor(protected dataService: DataService) {}
}
