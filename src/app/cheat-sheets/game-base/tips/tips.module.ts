import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { TipsComponent } from './tips.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule],
  declarations: [TipsComponent],
  exports: [TipsComponent],
})
export class TipsModule {}
