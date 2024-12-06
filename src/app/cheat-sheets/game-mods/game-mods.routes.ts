import { Routes } from '@angular/router';

import { GameModsComponent } from './game-mods.component';

export const ROOT_GAME_MODS = 'mods';
export const ROUTES_GAME_MODS: Routes = [
  {
    path: ROOT_GAME_MODS,
    component: GameModsComponent,
  },
  {
    path: 'mod',
    redirectTo: ROOT_GAME_MODS,
    pathMatch: 'full',
  },
];
