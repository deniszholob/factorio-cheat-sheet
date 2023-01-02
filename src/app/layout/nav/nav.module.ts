import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
