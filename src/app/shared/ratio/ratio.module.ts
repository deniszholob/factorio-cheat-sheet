import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconRatioCompositeModule } from '../icon-ratio-composite/icon-ratio-composite.module';
import { RatioComponent } from './ratio.component';

@NgModule({
  imports: [CommonModule, IconRatioCompositeModule],
  declarations: [RatioComponent],
  exports: [RatioComponent],
})
export class RatioModule {}
