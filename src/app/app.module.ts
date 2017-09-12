// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// === Project Imports === //
// Components
import { AppComponent } from './app.component';

// === Project Imports === //
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
    CheatSheetComponent,
    NavComponent
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
