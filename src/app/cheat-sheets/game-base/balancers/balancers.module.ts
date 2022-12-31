import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlueprintClipboardModule } from 'app/shared/blueprint-clipboard/blueprint-clipboard.module';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { BalancersComponent } from './balancers.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule, BlueprintClipboardModule],
  declarations: [BalancersComponent],
  exports: [BalancersComponent],
})
export class BalancersModule {}
