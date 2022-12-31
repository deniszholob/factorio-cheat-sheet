import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorSolarComponent } from './calculator-solar.component';
import { FormsModule } from '@angular/forms';
import { FactorioIconModule } from 'app/shared';

@NgModule({
  imports: [CommonModule, FormsModule, FactorioIconModule],
  declarations: [CalculatorSolarComponent],
  exports: [CalculatorSolarComponent],
})
export class CalculatorSolarModule {}
