import { Routes } from '@angular/router';
import { GameBaseComponent } from './game-base.component';

export const ROOT_GAME_BASE = 'base';
// Remove and use commented out code below if using mods pages
export const ROUTES_GAME_BASE: Routes = [
  {
    path: '',
    component: GameBaseComponent,
    data: { label: '' },
  },
];

// export const ROUTES_GAME_BASE: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: ROOT_GAME_BASE,
//         component: GameBaseComponent,
//         data: {
//           label: '',
//         },
//       },
//       {
//         path: '',
//         redirectTo: ROOT_GAME_BASE,
//         pathMatch: 'full',
//       },
//     ],
//   },
// ];
