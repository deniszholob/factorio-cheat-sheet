import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
