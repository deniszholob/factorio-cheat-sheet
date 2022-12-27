// Angular
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Angular CDK
import { CdkTableModule } from '@angular/cdk/table';

// Third Party (UI frameworks, etc...)
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbCollapseModule,
  NgbModule,
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

// Routing
import { RouterModule } from '@angular/router';

// Services
import * as Services from 'app/services';

// Pipes
import * as Pipes from 'app/pipes';

// Components
import { AppComponent } from 'app/app.component';
import * as SharedComponents from 'app/shared';
import { FactorioIconModule, RatioModule } from 'app/shared';
import * as ViewComponents from 'app/views';
import * as SheetComponents from 'app/views/cheat-sheets';
import { AdSenseModule } from './shared/ad-sense/ad-sense.module';
import { CsCommonRatiosModule } from './views/cheat-sheets/cs-common-ratios/cs-common-ratios.module';
import { IconRatioCompositeModule } from './shared/icon-ratio-composite/icon-ratio-composite.module';
import { BasicPowerModule } from './views/cheat-sheets/basic-power/basic-power.module';
import { CheatSheetModule } from './shared/cheat-sheet/cheat-sheet.module';
import { NuclearPowerModule } from './views/cheat-sheets/nuclear-power/nuclear-power.component.module';

const ngb = [
  NgbCollapseModule,
  NgbPaginationModule,
  NgbTooltipModule,
  NgbModule,
];

@NgModule({
  // Modules
  imports: [
    // Angular
    BrowserModule,
    RouterModule.forRoot([], { anchorScrolling: 'enabled' }),
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      // enabled: !isDevMode(), // Generated my ng add @angular/pwa Should use this or environment.production ???  Note: import { NgModule, isDevMode } from '@angular/core';
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable:30000' // Default, so commenting out
    }),

    // External
    CdkTableModule,
    ...ngb,
    AdSenseModule,

    // Local
    FactorioIconModule,
    RatioModule,
    CsCommonRatiosModule,
    BasicPowerModule,
    CheatSheetModule,
    NuclearPowerModule,

    // TODO Remove and only use in lower modules
    IconRatioCompositeModule,
  ],
  // Components
  declarations: [
    AppComponent,
    ViewComponents.NavComponent,
    ViewComponents.IntroComponent,
    ViewComponents.OverviewComponent,
    ViewComponents.MainComponent,
    ViewComponents.AnnexComponent,
    ViewComponents.FooterComponent,
    SharedComponents.BlueprintClipboardComponent,
    SheetComponents.BalancersComponent,
    SheetComponents.BeltsComponent,
    SheetComponents.CargoWagonTransferComponent,
    SheetComponents.CombatComponent,
    SheetComponents.FluidWagonTransferComponent,
    SheetComponents.InserterThroughputComponent,
    SheetComponents.InserterCapacityBonusComponent,
    SheetComponents.LinksComponent,
    SheetComponents.MaterialProcessingComponent,
    SheetComponents.MiningComponent,
    SheetComponents.ModulesAndBeaconsComponent,
    SheetComponents.OilRefiningComponent,
    SheetComponents.ProductivityModulePayoffsComponent,
    SheetComponents.ScienceComponent,
    SheetComponents.TipsComponent,
    SheetComponents.TrainColorsComponent,
    SheetComponents.VehicleFuelBonusComponent,
    Pipes.CeilingPipe,
    Pipes.TimePipe,
    Pipes.ReplacePipe,
  ],
  // Services
  providers: [Services.DataService, Services.SheetCollapseToggleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
