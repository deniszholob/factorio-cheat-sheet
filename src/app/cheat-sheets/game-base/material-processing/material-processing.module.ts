import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { MaterialProcessingComponent } from './material-processing.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule, FactorioIconModule],
  declarations: [MaterialProcessingComponent],
  exports: [MaterialProcessingComponent],
})
export class MaterialProcessingModule {}
