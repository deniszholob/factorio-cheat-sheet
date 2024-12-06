import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContributeComponent } from './contribute/contribute.component';
import { GameModsComponent } from './game-mods.component';
import { ROUTES_GAME_MODS } from './game-mods.routes';
import { PopularModsComponent } from './popular-mods/popular-mods.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_GAME_MODS),

    // Sheets
    ContributeComponent,
    PopularModsComponent,
  ],
  declarations: [GameModsComponent],
  exports: [GameModsComponent, RouterModule],
})
export class GameModsModule {}
