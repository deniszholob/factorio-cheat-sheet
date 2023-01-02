// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Services
import * as Services from 'app/services';

// Components
import { AppComponent } from 'app/app.component';
import { LayoutModule } from './layout/layout.module';
import { AdSenseModule } from './shared/ad-sense/ad-sense.module';

const ROUTER_OPTIONS: ExtraOptions = {
  anchorScrolling: 'enabled', // Doesn't work with href="#something" but rather with [routerLink]="['./']" [fragment]="something"
  scrollPositionRestoration: 'enabled', // Works with anchorScrolling only
  // useHash: true,
};
@NgModule({
  // Modules
  imports: [
    // Angular
    BrowserModule,
    RouterModule.forRoot([], ROUTER_OPTIONS),
    ServiceWorkerModule.register('ngsw-worker.js', {
      // enabled: !isDevMode(), // Generated my ng add @angular/pwa Should use this or environment.production ???  Note: import { NgModule, isDevMode } from '@angular/core';
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable:30000' // Default, so commenting out
    }),

    // Local
    LayoutModule,
    AdSenseModule,
  ],
  declarations: [AppComponent],
  providers: [Services.DataService, Services.SheetCollapseToggleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
