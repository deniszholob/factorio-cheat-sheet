// Angular Imports
import { Component, OnInit } from '@angular/core';

// RXJS
import { combineLatest } from 'rxjs';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/models/Data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { BeltsData } from 'app/models/BeltsData.model';
import { MiningData, Ore } from 'app/models/MiningData.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
import { MINING_DATA } from './mining.data';
import { BELTS_DATA } from '../belts/belts.data';

interface MiningRateTable {
    materials: string[];
    rowspan: number;
    miningRate: MiningRate;
    beltYellow: number;
    beltRed: number;
    beltBlue: number;
}

interface MiningRate {
    miner: string;
    rate: number;
}

@Component({
    selector: 'app-mining',
    templateUrl: './mining.component.html',
    styleUrls: ['./mining.component.scss'] // Enable as needed
})
export class MiningComponent implements OnInit {
    public APP_SETTINGS = APP_SETTINGS;
    public cheatSheet: CheatSheet;
    public sheetData: MiningData;
    public beltData: BeltsData;

    public miningRateTable: MiningRateTable[] = [];

    public inputMin = 0;
    public inputStep = 1;
    public prodBonusLevelChanged = 0;
    public prodBonusLevel = this.prodBonusLevelChanged;
    public productivityPercent = 0;

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        combineLatest([
            this.dataService.getLocalCheatSheetData<MiningData>(MINING_DATA),
            this.dataService.getLocalCheatSheetData<BeltsData>(BELTS_DATA),
        ]).subscribe(
            ([result, result2]: [Data<MiningData>, Data<BeltsData>]) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
                this.beltData = result2.data;
                this.updateTable();
            },
            error => {
                console.log(error);
            }
        );
    }

    /** Makes sure the value changes before running calculations
     *  Mostly for the mouse click event, since the change event is not registering the tick change until mouse moves.
     */
    inputChange() {
        if (this.prodBonusLevel !== this.prodBonusLevelChanged) {
            this.prodBonusLevelChanged = this.prodBonusLevel;
            this.updateTable();
        }
    }

    public getMiningRateTableEntry = (): MiningRateTable => {
        return {
            materials: [],
            rowspan: 1,
            miningRate: {
                miner: '',
                rate: 1
            },
            beltYellow: 1,
            beltRed: 1,
            beltBlue: 1
        };
    }

    private groupOres(): Ore[][] {
        const groupedOres: Ore[][] = [];
        // Sort, in case json file changes.
        this.sheetData.ores.sort((a, b) => {
            return a.miningTime - b.miningTime;
        });
        let compareMiningTime = this.sheetData.ores[0].miningTime;
        groupedOres.push([]);

        this.sheetData.ores.forEach(ore => {
            if (ore.miningTime === compareMiningTime) {
                groupedOres[groupedOres.length - 1].push(ore);
            } else {
                compareMiningTime = ore.miningTime;
                groupedOres.push([ore]);
            }
        });
        return groupedOres;
    }

    public calcProductivityPercent(): number {
        return this.sheetData.prodBonusPercent * this.prodBonusLevel;
    }

    // Way too complicated for this small data set, that is unlikely to change,
    // but nevertheless can be extended out to various miners and ores.
    // Didn't code in more belt support however, so limited to the 3 vanilla ones.
    public updateTable(): void {
        if (this.prodBonusLevel < this.inputMin) { this.prodBonusLevel = this.inputMin; }
        this.productivityPercent = this.calcProductivityPercent();
        let nextRowSpan = 0;

        this.miningRateTable = [];
        this.groupOres().forEach(oreGroup => {
            this.sheetData.drills.forEach(drill => {
                const miningRateTableEntry = this.getMiningRateTableEntry();

                // Check if drill can be used
                const canUseBurner = oreGroup.findIndex(ore => {
                    return !ore.burnerMiningDrill;
                }) === -1 ? true : false;
                const isBurner = drill.id.startsWith('Burner');
                const displayEntry = !(!canUseBurner && isBurner);

                if (displayEntry) {
                    // Combine like rows together
                    if (isBurner) {
                        miningRateTableEntry.rowspan = 2;
                        nextRowSpan = 0;
                    } else {
                        miningRateTableEntry.rowspan = nextRowSpan;
                    }
                    // Get ore list to display
                    oreGroup.forEach(ore => {
                        miningRateTableEntry.materials.push(ore.id);
                    });

                    // Calc stuff
                    const miningTime = oreGroup[0].miningTime;

                    const productivity = 1 + (this.productivityPercent / 100);
                    const miningRate = drill.miningSpeed / miningTime * productivity;

                    miningRateTableEntry.miningRate.miner = drill.id;
                    miningRateTableEntry.miningRate.rate = miningRate;
                    this.beltData.belt_info.forEach(belt => {
                        // Not ideal, get rid of switch and modified view to accept array of belts to display.
                        switch (belt.tier) {
                            case 1:
                                miningRateTableEntry.beltYellow = belt.throughput / miningRate;
                                break;
                            case 2:
                                miningRateTableEntry.beltRed = belt.throughput / miningRate;
                                break;
                            case 3:
                                miningRateTableEntry.beltBlue = belt.throughput / miningRate;
                                break;
                            default:
                                break;
                        }
                    });
                    this.miningRateTable.push(miningRateTableEntry);

                } else {
                    // This entry is single, instead of combining two
                    if (isBurner) {
                        miningRateTableEntry.rowspan = 0;
                        nextRowSpan = 1;
                    } else {
                        miningRateTableEntry.rowspan = nextRowSpan;
                    }
                }
            });
        });
    }

}
