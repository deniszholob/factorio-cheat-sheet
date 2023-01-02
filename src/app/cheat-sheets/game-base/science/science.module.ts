import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';
import { IconRatioCompositeModule } from 'app/shared/icon-ratio-composite/icon-ratio-composite.module';

import { ScienceComponent } from './science.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CheatSheetModule,
    FactorioIconModule,
    IconRatioCompositeModule,
  ],
  declarations: [ScienceComponent],
  exports: [ScienceComponent],
})
export class ScienceModule {}
