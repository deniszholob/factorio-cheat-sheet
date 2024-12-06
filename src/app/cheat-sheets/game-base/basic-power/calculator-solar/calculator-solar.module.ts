import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FactorioIconModule } from 'app/shared';

import { CalculatorSolarComponent } from './calculator-solar.component';

@NgModule({
  imports: [CommonModule, FormsModule, FactorioIconModule],
  declarations: [CalculatorSolarComponent],
  exports: [CalculatorSolarComponent],
})
export class CalculatorSolarModule {}
