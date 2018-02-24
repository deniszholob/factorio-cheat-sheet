// Angular
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private route: ActivatedRoute) { }

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
