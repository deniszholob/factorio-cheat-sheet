import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from 'app/pipes';
import { FactorioIconModule } from 'app/shared';
import { BlueprintClipboardModule } from 'app/shared/blueprint-clipboard/blueprint-clipboard.module';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { TrainColorsComponent } from './train-colors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheatSheetModule,
    FactorioIconModule,
    BlueprintClipboardModule,
  ],
  declarations: [TrainColorsComponent, ReplacePipe],
  exports: [TrainColorsComponent],
})
export class TrainColorsModule {}
