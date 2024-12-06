import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContributeModule } from './contribute/contribute.module';
import { GameModsComponent } from './game-mods.component';
import { ROUTES_GAME_MODS } from './game-mods.routes';
import { PopularModsModule } from './popular-mods/popular-mods.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_GAME_MODS),

    // Sheets
    ContributeModule,
    PopularModsModule,
  ],
  declarations: [GameModsComponent],
  exports: [GameModsComponent, RouterModule],
})
export class GameModsModule {}
