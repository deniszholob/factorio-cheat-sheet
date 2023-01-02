// Angular
import { Component, OnDestroy } from '@angular/core';

// PWA
import {
  SwUpdate,
  VersionEvent,
  VersionReadyEvent,
} from '@angular/service-worker';
import { filter, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  private readonly clearSub$ = new Subject<void>();

  constructor(private swUpdate: SwUpdate) {
    this.subToUpdateApp();
  }

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
