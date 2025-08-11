import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FactorioIconModule, RatioModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';
import { IconRatioCompositeModule } from 'app/shared/icon-ratio-composite/icon-ratio-composite.module';

import { NuclearPowerComponent } from './nuclear-power.component';
import { SreDiagramModule } from './sre-diagram/sre-diagram.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SreDiagramModule,
    FactorioIconModule,
    CheatSheetModule,
    IconRatioCompositeModule,
    RatioModule,
  ],
  declarations: [NuclearPowerComponent],
  exports: [NuclearPowerComponent],
})
export class NuclearPowerModule {}
