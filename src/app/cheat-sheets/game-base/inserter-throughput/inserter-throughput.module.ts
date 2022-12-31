import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { InserterThroughputComponent } from './inserter-throughput.component';

@NgModule({
  imports: [CommonModule, FormsModule, CheatSheetModule, FactorioIconModule],
  declarations: [InserterThroughputComponent],
  exports: [InserterThroughputComponent],
})
export class InserterThroughputModule {}
