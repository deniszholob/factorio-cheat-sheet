import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { LinksComponent } from './links.component';

@NgModule({
  imports: [CommonModule, CheatSheetModule],
  declarations: [LinksComponent],
  exports: [LinksComponent],
})
export class LinksModule {}
