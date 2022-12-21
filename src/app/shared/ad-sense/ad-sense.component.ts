/** @ref https://github.com/scttcper/ng2-adsense/blob/master/src/lib/adsense.component.ts */
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-ad-sense',
  templateUrl: './ad-sense.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdSenseComponent implements AfterViewInit, OnDestroy {
  public displayAd: boolean = environment.production;

  @ViewChild('ins', { read: ElementRef, static: true })
  public ins?: ElementRef;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(PLATFORM_ID)
    private platform: any
  ) {}

  ngOnDestroy(): void {
    if (this.ins) {
      const iframe = this.ins.nativeElement.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
        iframe.src = 'about:blank';
        iframe.remove();
      }
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
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      } catch {
        // pass
      }
    }
  }
}
