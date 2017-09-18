// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    // styleUrls: ['./nav.component.scss'] // Enable as needed
})
export class NavComponent implements OnInit {
    isNavOpen: boolean;

    sheetIds = [
        'belt-throughput',
        'common-ratios',
        'productivity-module-payoffs',
        'science',
    ];

    constructor(
        public dataService: DataService
    ) { }


    ngOnInit() {
        this.closeNav();
    }

    closeNav() { this.isNavOpen = false; }

    openNav() { this.isNavOpen = true; }

    toggleNav() { this.isNavOpen = !this.isNavOpen; }

    sheetName(id){
        return this.dataService.toTitleCase(id.replace(/-/g, ' '));
    }
}
