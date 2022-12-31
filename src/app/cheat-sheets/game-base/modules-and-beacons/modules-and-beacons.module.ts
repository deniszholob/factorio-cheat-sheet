import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { ModulesAndBeaconsComponent } from './modules-and-beacons.component';

@NgModule({
  imports: [CommonModule, FormsModule, CheatSheetModule, FactorioIconModule],
  declarations: [ModulesAndBeaconsComponent],
  exports: [ModulesAndBeaconsComponent],
})
export class ModulesAndBeaconsModule {}
