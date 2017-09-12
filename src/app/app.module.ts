// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// === Project Imports === //
// Components
import { AppComponent } from './app.component';
import * as appViews from './views';

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
        appViews.MainComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
