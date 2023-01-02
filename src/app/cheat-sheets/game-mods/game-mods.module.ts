import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES_GAME_MODS } from './game-mods.routes';

import { ContributeModule } from './contribute/contribute.module';
import { GameModsComponent } from './game-mods.component';
import { UtilityModsModule } from './utility-mods/utility-mods.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_GAME_MODS),

    // Sheets
    ContributeModule,
    UtilityModsModule,
  ],
  declarations: [GameModsComponent],
  exports: [GameModsComponent, RouterModule],
})
export class GameModsModule {}
