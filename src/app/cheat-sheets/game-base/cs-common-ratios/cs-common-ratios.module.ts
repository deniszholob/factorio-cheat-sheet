import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsCommonRatiosComponent } from './cs-common-ratios.component';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';
import { FactorioIconModule, RatioModule } from 'app/shared';

@NgModule({
  imports: [
    CommonModule,
    CheatSheetTemplateModule,
    RatioModule,
    FactorioIconModule,
  ],
  declarations: [CsCommonRatiosComponent],
  exports: [CsCommonRatiosComponent],
})
export class CsCommonRatiosModule {}
