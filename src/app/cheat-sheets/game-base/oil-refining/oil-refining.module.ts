import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';
import { IconRatioCompositeModule } from 'app/shared/icon-ratio-composite/icon-ratio-composite.module';

import { OilRefiningComponent } from './oil-refining.component';

@NgModule({
  imports: [
    CommonModule,
    CheatSheetModule,
    FactorioIconModule,
    IconRatioCompositeModule,
  ],
  declarations: [OilRefiningComponent],
  exports: [OilRefiningComponent],
})
export class OilRefiningModule {}
