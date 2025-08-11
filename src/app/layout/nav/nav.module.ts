import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FactorioIconModule } from 'app/shared';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, FactorioIconModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
