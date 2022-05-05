/** @ref https://github.com/scttcper/ng2-adsense/blob/master/src/lib/adsense.component.ts */
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-ad-sense',
  templateUrl: './ad-sense.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdSenseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ins', { read: ElementRef, static: true }) ins!: ElementRef;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(PLATFORM_ID) private platform: any,
  ) { }


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

  private push(): void {
    if (window) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch {
        // pass
      }
    }
  }
}
