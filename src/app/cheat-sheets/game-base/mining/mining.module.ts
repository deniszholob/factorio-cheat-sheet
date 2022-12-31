import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CeilingPipe } from 'app/pipes';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { MiningComponent } from './mining.component';

@NgModule({
  imports: [CommonModule, FormsModule, CheatSheetModule, FactorioIconModule],
  declarations: [MiningComponent, CeilingPipe],
  exports: [MiningComponent],
})
export class MiningModule {}
