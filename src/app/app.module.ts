// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Angular CDK
import { CdkTableModule } from '@angular/cdk/table';

// Third Party (UI frameworks, etc...)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
import { RouterModule } from '@angular/router';

// Services
import * as Services from 'app/services';

// Pipes
import * as Pipes from 'app/pipes';

// Components
import { AppComponent } from 'app/app.component';
import * as SharedComponents from 'app/shared';
import * as ViewComponents from 'app/views';
import * as SheetComponents from 'app/views/cheat-sheets';


@NgModule({
    // Modules
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        FormsModule,
        HttpClientModule,
        CdkTableModule,
        NgbModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
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
        SharedComponents.CheatSheetComponent,
        SharedComponents.FactorioIconComponent,
        SheetComponents.BalancersComponent,
        SheetComponents.BasicPowerComponent,
        SheetComponents.BeltThroughputComponent,
        SheetComponents.CargoWagonTransferComponent,
        SheetComponents.CombatComponent,
        SheetComponents.CommonRatiosComponent,
        SheetComponents.FluidWagonTransferComponent,
        SheetComponents.InserterThroughputComponent,
        SheetComponents.InserterCapacityBonusComponent,
        SheetComponents.LinksComponent,
        SheetComponents.MaterialProcessingComponent,
        SheetComponents.MiningComponent,
        SheetComponents.ModulesAndBeaconsComponent,
        SheetComponents.NuclearPowerComponent,
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
    providers: [
        Services.DataService,
        Services.SheetCollapseToggleService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
