import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { CargoWagonTransferComponent } from './cargo-wagon-transfer.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule, FactorioIconModule],
  declarations: [CargoWagonTransferComponent],
  exports: [CargoWagonTransferComponent],
})
export class CargoWagonTransferModule {}
