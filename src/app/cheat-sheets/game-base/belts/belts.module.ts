import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { BeltsComponent } from './belts.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule, FactorioIconModule],
  declarations: [BeltsComponent],
  exports: [BeltsComponent],
})
export class BeltsModule {}
