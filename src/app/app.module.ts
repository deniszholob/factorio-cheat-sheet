// Angular Imports
import { NgModule } from '@angular/core';
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

@NgModule({
    imports: [
        BrowserModule,
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
        sheetComponents.BeltThroughputComponent,
        sheetComponents.CommonRatiosComponent,
        sheetComponents.OreProcessingComponent,
        sheetComponents.ProductivityModulePayoffsComponent,
        sheetComponents.ScienceComponent,
    ],
    providers: [
        appServices.DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
