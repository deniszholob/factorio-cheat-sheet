// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
        HttpModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        appViews.IntroComponent,
        appViews.MainComponent,
        appViews.CreditsComponent,
        appViews.FooterComponent,
        appShared.CheatSheetComponent,
        appShared.FactorioIconComponent,
        sheetComponents.BeltThroughputComponent,
        sheetComponents.ProductivityModulePayoffsComponent,
    ],
    providers: [
        appServices.DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
