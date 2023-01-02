import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [OverviewComponent],
  exports: [OverviewComponent],
})
export class OverviewModule {}
