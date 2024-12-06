/** @ref https://github.com/scttcper/ng2-adsense/blob/master/src/lib/adsense.module.ts */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdSenseComponent } from './ad-sense.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdSenseComponent],
  exports: [AdSenseComponent],
})
export class AdSenseModule {}
