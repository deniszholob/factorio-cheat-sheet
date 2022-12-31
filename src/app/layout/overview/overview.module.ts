import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OverviewComponent],
  exports: [OverviewComponent],
})
export class OverviewModule {}
