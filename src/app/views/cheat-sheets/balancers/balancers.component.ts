// Angular Imports
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { forkJoin } from 'rxjs';

// UI
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

// Services
import { DataService, ClipboardService, BASE_URL } from 'app/services/index';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';

const dataFile = 'balancers';
const tooltip_Default = 'Click to copy Blueprint';
const tooltip_Copied = 'BP String Copied';

@Component({
    selector: 'app-balancers',
    templateUrl: './balancers.component.html',
    styleUrls: ['./balancers.component.scss'] // Enable as needed
})
export class BalancersComponent implements OnInit {
    public cheatSheet: CheatSheet;
    public sheetData: any;

    /** Tooltip for copying blueprint book */
    public tooltipMsg = tooltip_Default;
    /** Holds the blueprint strings for user to copy */
    public blueprintStrings: string[] = [];
    /** Holds the blueprint strings for user to copy */
    public blueprintTable: string[] = [];

    public APP_SETTINGS = APP_SETTINGS;

    constructor(
        public dataService: DataService,
        private httpClientService: HttpClient,
        public clipboardService: ClipboardService,
    ) { }

    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
                this.processBlueprints();
            },
            error => {
                console.log(error);
            }
        );
    }

    /**
     * Get Blueprint strings from the urls
     * Populate the tooltip array with default string
     */
    private async processBlueprints() {
        this.tooltipMsg = tooltip_Default;
        const blueprintStreams = [];
        const tableStreams = [];

        this.sheetData.commonBalancers.forEach(blueprint => {
            blueprintStreams.push(this.httpClientService.get(blueprint.raw, { responseType: 'text' }));
        });
        this.sheetData.table.forEach(blueprintBook => {
            tableStreams.push(this.httpClientService.get(BASE_URL + blueprintBook.url, { responseType: 'text' }));
        });

        // Common links
        forkJoin(blueprintStreams).subscribe(
            (response: string[]) => {
                this.blueprintStrings = response;
            },
            error => {
                console.log(error);
            }
        );

        // Old Table
        forkJoin(tableStreams).subscribe(
            (response: string[]) => {
                this.blueprintTable = response;
            },
            error => {
                console.log(error);
            }
        );
        // await this.testBPMatch();
    }

    /**
     * Resets the tooltip message to the default and close after a timeout
     * @param tooltip NgbTooltip object to operate on
     */
    private resetTooltip(tooltip: NgbTooltip): void {
        setTimeout(() => {
            this.tooltipMsg = tooltip_Default;
            tooltip.close();
            console.log(this.tooltipMsg);
        }, 2000);
    }

    /**
     * Copies Blueprint to clipboard
     * @param url Link that contains the BP text
     * @param tooltip NgbTooltip object to operate on
     */
    public copyBpString(url: string, tooltip: NgbTooltip): void {
        this.clipboardService.copyMessageExec(url);
        this.tooltipMsg = tooltip_Copied;
        this.resetTooltip(tooltip);
    }

    /**
     * @param condition Boolean to check against
     * @returns a Visibility style (visible or hidden) depending on condition boolean
     */
    public visibility(condition: boolean): any {
        return { 'visibility': condition ? 'visible' : 'hidden' };
    }


    /** Quick test to compare the order of the bp strings in the array */
    private testBPMatch() {
        let i = 0;
        this.sheetData.table.forEach(blueprintBook => {
            const j = i;
            this.httpClientService.get(blueprintBook.url, { responseType: 'text' }).subscribe(
                (response) => {
                    if (response === this.blueprintStrings[j]) { console.log(j + ' match'); }
                    else { console.log(j + ' NOT match'); }
                }
            );
            i++;
        });
    }
}
