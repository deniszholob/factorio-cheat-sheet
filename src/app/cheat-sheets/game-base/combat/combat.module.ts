import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { CombatComponent } from './combat.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule],
  declarations: [CombatComponent],
  exports: [CombatComponent],
})
export class CombatModule {}
