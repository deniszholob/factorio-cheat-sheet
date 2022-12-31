import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GameBaseModule } from 'app/cheat-sheets/game-base/game-base.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, GameBaseModule],
  declarations: [MainComponent],
  exports: [MainComponent, RouterModule],
})
export class MainModule {}
