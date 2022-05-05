/** @ref https://github.com/scttcper/ng2-adsense/blob/master/src/lib/adsense-config.ts */
import { InjectionToken } from '@angular/core';

/** Set optional global default values */
export interface AdsenseConfig {
  /** adsense account ca-pub-XXXXXXXXXXXXXXXX */
  adClient: string;
  /** ad slot/number */
  adSlot: string | number;
  /** data-ad-format default: auto */
  adFormat: string;
  /** ins element display style */
  display: string;
  /** ins element height in px */
  width: number;
  /** ins element width in px */
  height: number;
  /** used for in-feed ads */
  layout: string;
  /** used for in-feed ads */
  layoutKey: string;
  /** enable page-level ads */
  pageLevelAds: boolean;
  /** sets up some sort of google test ad */
  adtest: string;
  /** used for flexible ads */
  fullWidthResponsive: boolean;
}

export const ADSENSE_TOKEN = new InjectionToken<AdsenseConfig>(
  'AdsenseConfig',
);
