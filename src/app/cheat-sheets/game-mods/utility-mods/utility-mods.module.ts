import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';

import { UtilityModsComponent } from './utility-mods.component';

@NgModule({
  imports: [CommonModule, CheatSheetTemplateModule, RouterModule],
  declarations: [UtilityModsComponent],
  exports: [UtilityModsComponent],
})
export class UtilityModsModule {}
