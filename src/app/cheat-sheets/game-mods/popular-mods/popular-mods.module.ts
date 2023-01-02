import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';

import { PopularModsComponent } from './popular-mods.component';

@NgModule({
  imports: [CommonModule, CheatSheetTemplateModule, RouterModule],
  declarations: [PopularModsComponent],
  exports: [PopularModsComponent],
})
export class PopularModsModule {}
