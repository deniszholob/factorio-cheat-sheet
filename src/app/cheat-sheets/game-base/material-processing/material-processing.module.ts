import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FactorioIconModule, RatioModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { MaterialProcessingComponent } from './material-processing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CheatSheetModule,
    FactorioIconModule,
    RatioModule,
  ],
  declarations: [MaterialProcessingComponent],
  exports: [MaterialProcessingComponent],
})
export class MaterialProcessingModule {}
