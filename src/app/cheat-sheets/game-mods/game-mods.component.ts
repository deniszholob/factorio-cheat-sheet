import { Component } from '@angular/core';
import { MOD_REQUESTS, UserRequest } from './game-mods.data';

@Component({
  selector: 'app-game-mods',
  templateUrl: './game-mods.component.html',
})
export class GameModsComponent {
  public readonly iconId: string = 'Iron_gear_wheel';
  public readonly title: string = 'Factorio Mods';
  public readonly MOD_REQUESTS: UserRequest[] = MOD_REQUESTS;
}
