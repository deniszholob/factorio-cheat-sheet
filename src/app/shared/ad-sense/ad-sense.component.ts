/** @ref https://github.com/scttcper/ng2-adsense/blob/master/src/lib/adsense.component.ts */
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
} from '@angular/core';

import { ADSENSE_TOKEN, AdsenseConfig } from './ad-sense.config';

@Component({
  selector: 'app-ad-sense',
  templateUrl: './ad-sense.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdSenseComponent implements OnInit, AfterViewInit, OnDestroy {
  /** adsense account ca-pub-XXXXXXXXXXXXXXXX */
  @Input() adClient!: string;
  /** ad slot/number */
  @Input() adSlot!: string | number;
  @Input() adFormat!: string;
  /** can be manually set if you need all ads on a page to have same id page-xxx */
  @Input() adRegion = 'page-' + Math.floor(Math.random() * 10000) + 1;
  /** ins element display style */
  @Input() display!: string;
  /** ins element height in px */
  @Input() width!: number;
  /** ins element width in px */
  @Input() height!: number;
  /** used for in-feed ads */
  @Input() layout!: string;
  /** used for in-feed ads */
  @Input() layoutKey!: string;
  /** enable page-level ads */
  @Input() pageLevelAds!: boolean;
  /** sets up some sort of google test ad */
  @Input() adtest!: string;
  /* used for flexible ads */
  @Input() fullWidthResponsive!: boolean;
  /**
   * classes applied to the ins element
   */
  @Input() className = '';
  @ViewChild('ins', { read: ElementRef, static: true }) ins!: ElementRef;

  constructor(
    @Inject(ADSENSE_TOKEN) private config: AdsenseConfig,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(PLATFORM_ID) private platform: any,
  ) { }

  ngOnInit(): void {
    const config = this.config;
    this.adClient = this.adClient ?? config.adClient;
    this.adSlot = this.adSlot ?? config.adSlot;
    this.adFormat = this.adFormat ?? config.adFormat ?? 'auto';
    this.display = this.display ?? config.display ?? 'block';
    this.width = this.width ?? config.width;
    this.height = this.height ?? config.height;
    this.layout = this.layout ?? config.layout;
    this.layoutKey = this.layoutKey ?? config.layoutKey;
    this.pageLevelAds = this.pageLevelAds ?? config.pageLevelAds;
    this.adtest = this.adtest ?? config.adtest;
    this.fullWidthResponsive = this.fullWidthResponsive ?? config.fullWidthResponsive;
  }
  ngOnDestroy(): void {
    const iframe = this.ins.nativeElement.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      iframe.src = 'about:blank';
      iframe.remove();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform)) {
      this.push();
    }
  }

  push(): void {
    const p: Record<string, string | boolean> = {};
    if (this.pageLevelAds) {
      p.google_ad_client = this.adClient;
      p.enable_page_level_ads = true;
    }

    if (window) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(p);
      } catch {
        // pass
      }
    }
  }
}
