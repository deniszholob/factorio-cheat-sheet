import { Routes } from '@angular/router';
import { GameBaseComponent } from './game-base.component';

export const ROOT_GAME_BASE = 'base';
export const ROUTES_GAME_BASE: Routes = [
  {
    path: '',
    children: [
      {
        path: ROOT_GAME_BASE,
        component: GameBaseComponent,
        data: {
          label: '',
        },
      },
      {
        path: '',
        redirectTo: ROOT_GAME_BASE,
        pathMatch: 'full',
      },
    ],
  },
];
