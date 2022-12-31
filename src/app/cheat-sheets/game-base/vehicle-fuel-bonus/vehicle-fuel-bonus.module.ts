import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { VehicleFuelBonusComponent } from './vehicle-fuel-bonus.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule, FactorioIconModule],
  declarations: [VehicleFuelBonusComponent],
  exports: [VehicleFuelBonusComponent],
})
export class VehicleFuelBonusModule {}
