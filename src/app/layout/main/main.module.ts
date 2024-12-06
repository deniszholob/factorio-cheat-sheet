import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheatSheetsModule } from 'app/cheat-sheets/cheat-sheets.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, CheatSheetsModule],
  declarations: [MainComponent],
  exports: [MainComponent, RouterModule],
})
export class MainModule {}
