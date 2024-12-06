import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FactorioIconModule, RatioModule } from 'app/shared';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';

import { CsCommonRatiosComponent } from './cs-common-ratios.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CheatSheetTemplateModule,
    RatioModule,
    FactorioIconModule,
  ],
  declarations: [CsCommonRatiosComponent],
  exports: [CsCommonRatiosComponent],
})
export class CsCommonRatiosModule {}
