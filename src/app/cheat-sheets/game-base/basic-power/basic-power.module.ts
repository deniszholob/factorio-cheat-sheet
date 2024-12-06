import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { BasicPowerComponent } from './basic-power.component';
import { CalculatorSolarModule } from './calculator-solar/calculator-solar.module';

@NgModule({
  imports: [
    CommonModule,
    FactorioIconModule,
    CheatSheetModule,
    CalculatorSolarModule,
  ],
  declarations: [BasicPowerComponent],
  exports: [BasicPowerComponent],
})
export class BasicPowerModule {}
