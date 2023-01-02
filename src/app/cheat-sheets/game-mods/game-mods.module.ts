import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheatSheetTemplateModule } from 'app/shared/cheat-sheet-template/cheat-sheet-template.module';
import { ROUTES_GAME_MODS } from './game-mods.routes';

import { GameModsComponent } from './game-mods.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_GAME_MODS),
    CheatSheetTemplateModule,
  ],
  declarations: [GameModsComponent],
  exports: [GameModsComponent, RouterModule],
})
export class GameModsModule {}
