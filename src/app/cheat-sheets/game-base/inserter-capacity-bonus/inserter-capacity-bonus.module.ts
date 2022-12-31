import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { InserterCapacityBonusComponent } from './inserter-capacity-bonus.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule, FactorioIconModule],
  declarations: [InserterCapacityBonusComponent],
  exports: [InserterCapacityBonusComponent],
})
export class InserterCapacityBonusModule {}
