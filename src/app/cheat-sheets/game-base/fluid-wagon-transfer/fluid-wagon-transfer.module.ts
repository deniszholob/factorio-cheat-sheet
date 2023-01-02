import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { FluidWagonTransferComponent } from './fluid-wagon-transfer.component';

@NgModule({
  imports: [CommonModule, RouterModule, CheatSheetModule, FactorioIconModule],
  declarations: [FluidWagonTransferComponent],
  exports: [FluidWagonTransferComponent],
})
export class FluidWagonTransferModule {}
