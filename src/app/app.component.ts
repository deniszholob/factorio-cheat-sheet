// Angular
import { Component, OnDestroy } from '@angular/core';

// PWA
import {
  SwUpdate,
  VersionEvent,
  VersionReadyEvent,
} from '@angular/service-worker';
import { filter, map, Subject, takeUntil } from 'rxjs';

// Ongoing Angular issue with scrolling to anchor elements: https://github.com/angular/angular/issues/6595
// Modified Solution (ngOnInit() and ngAfterVewInit()) from the issues page and https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'] // Enable as needed
})
export class AppComponent implements OnDestroy {
  // private fragment: string = '';
  // private scrolled: boolean = false;

  private clearSub$ = new Subject<void>();

  constructor(
    // private route: ActivatedRoute,
    private swUpdate: SwUpdate
  ) {
    this.subToUpdateApp();
  }

  // ngOnInit(): void {
  // this.route.fragment
  //   .pipe(takeUntil(this.clearSub$))
  //   .subscribe((fragment: string | null) => {
  //     this.fragment = fragment ?? '';
  //   });
  // }

  /**
   * This will execute each time after every view is loaded
   * Only need one correct view to load then stop trying to scroll
   * Catch any invalid views.
   */
  // ngAfterViewChecked(): void {
  // if (!this.scrolled) {
  //   try {
  //     document.querySelector('#' + this.fragment)?.scrollIntoView();
  //     this.scrolled = true;
  //   } catch (e) {
  //     // Ignore any invalid tries
  //   }
  // }
  // }

  ngOnDestroy(): void {
    this.clearSub$.next();
    this.clearSub$.complete();
  }

  /** Service worker auto refresh the page if new version available */
  private subToUpdateApp(): void {
    this.checkServiceWorkerForUpdates().subscribe(() => {
      this.swUpdate.activateUpdate().then(() => document.location.reload());
    });
  }

  /** https://angular.io/api/service-worker/SwUpdate */
  private checkServiceWorkerForUpdates() {
    return this.swUpdate.versionUpdates.pipe(
      takeUntil(this.clearSub$),
      filter(
        (evt: VersionEvent): evt is VersionReadyEvent =>
          evt.type === 'VERSION_READY'
      ),
      map((evt: VersionReadyEvent) => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion,
      }))
    );
  }
}
