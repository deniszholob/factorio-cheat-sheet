// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Constants
const dataFile = 'update';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    //   styleUrls: ['./footer.component.scss'] // Enable as needed
})
export class FooterComponent implements OnInit {
    lastUpdate: number;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.GET<Object>(dataFile).subscribe(
            (result: Object) => {
                this.lastUpdate = result['updated'];
            },
            error => {
                console.log(error);
            }
        );
    }

}
