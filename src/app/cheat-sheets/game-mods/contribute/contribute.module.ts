import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';

import { ContributeComponent } from './contribute.component';

@NgModule({
  imports: [CommonModule, CheatSheetTemplateModule],
  declarations: [ContributeComponent],
  exports: [ContributeComponent],
})
export class ContributeModule {}
