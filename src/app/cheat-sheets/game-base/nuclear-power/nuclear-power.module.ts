import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';
import { NuclearPowerComponent } from './nuclear-power.component';
import { SreDiagramModule } from './sre-diagram/sre-diagram.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SreDiagramModule,
    FactorioIconModule,
    CheatSheetModule,
  ],
  declarations: [NuclearPowerComponent],
  exports: [NuclearPowerComponent],
})
export class NuclearPowerModule {}
