// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// === Project Imports === //
// Shared
import * as appShared from 'app/shared';

// Services
import * as appServices from 'app/services';

// Components
import { AppComponent } from 'app/app.component';
import * as appViews from 'app/views';
import * as sheetComponents from 'app/views/cheat-sheets';

// ===  Other Imports === //
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        appViews.NavComponent,
        appViews.IntroComponent,
        appViews.OverviewComponent,
        appViews.MainComponent,
        appViews.CreditsComponent,
        appViews.FooterComponent,
        appShared.CheatSheetComponent,
        appShared.FactorioIconComponent,
        sheetComponents.BasicPowerComponent,
        sheetComponents.BeltThroughputComponent,
        sheetComponents.CommonRatiosComponent,
        sheetComponents.FluidWagonComponent,
        sheetComponents.InserterThroughputComponent,
        sheetComponents.LinksComponent,
        sheetComponents.MaterialProcessingComponent,
        sheetComponents.MiningComponent,
        sheetComponents.ModulesAndBeaconsComponent,
        sheetComponents.NuclearPowerComponent,
        sheetComponents.OilRefiningComponent,
        sheetComponents.ProductivityModulePayoffsComponent,
        sheetComponents.ScienceComponent,
        sheetComponents.TipsComponent
    ],
    providers: [
        appServices.DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
