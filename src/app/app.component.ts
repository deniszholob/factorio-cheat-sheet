// Angular
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// PWA
import { SwUpdate } from '@angular/service-worker';

// Ongoing Angular issue with scrolling to anchor elements: https://github.com/angular/angular/issues/6595
// Modified Solution from the issues page and https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss'] // Enable as needed
})
export class AppComponent implements OnInit, AfterViewChecked {
    private fragment: string;
    private scrolled = false;

    constructor(
        private route: ActivatedRoute,
        private updates: SwUpdate,
    ) {
        // Service worker auto refresh the page if new version available
        updates.available.subscribe(event => {
            this.updates.activateUpdate().then(() => document.location.reload());
        });
    }

    ngOnInit() {
        this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    }

    /**
     * This will execute each time after every view is loaded
     * Only need one correct view to load then stop trying to scroll
     * Catch any invalid views.
     */
    ngAfterViewChecked(): void {
        if (!this.scrolled) {
            try {
                document.querySelector('#' + this.fragment).scrollIntoView();
                this.scrolled = true;
            } catch (e) { } // Ignore any invalid tries
        }
    }

}
