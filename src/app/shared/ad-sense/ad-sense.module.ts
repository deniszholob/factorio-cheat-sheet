/** @ref https://github.com/scttcper/ng2-adsense/blob/master/src/lib/adsense.module.ts */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdSenseComponent } from './ad-sense.component';
import { AdsenseConfig, ADSENSE_TOKEN } from './ad-sense.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdSenseComponent],
  exports: [AdSenseComponent],
})
export class AdSenseModule {
  static forRoot(config: Partial<AdsenseConfig> = {}): ModuleWithProviders<AdSenseModule> {
    return {
      ngModule: AdSenseModule,
      providers: [{ provide: ADSENSE_TOKEN, useValue: config }],
    };
  }
}
