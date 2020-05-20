// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data.model';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
import { APP_SETTINGS } from 'app/shared/app-settings';
const dataFile = 'cargo-wagon-transfer';

interface CargoTransferTimeModel {
    itemsPerCycle: number;
    stack10: number;
    stack50: number;
    stack100: number;
    stack200: number;
}

interface CargoChestFill {
    chests: number;
    slotsPerChest: SlotItem;
    stack10: SlotItem;
    stack50: SlotItem;
    stack100: SlotItem;
    stack200: SlotItem;
}

interface SlotItem {
    dec: number;
    round: number;
}

@Component({
    selector: 'app-cargo-wagon-transfer',
    templateUrl: './cargo-wagon-transfer.component.html',
    // styleUrls: ['./cargo-wagon-transfer.component.scss'] // Enable as needed
})
export class CargoWagonTransferComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: any;

    APP_SETTINGS = APP_SETTINGS;

    tableCargoTransferTime: CargoTransferTimeModel[] = [];
    tableChestFill: CargoChestFill[] = [];

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
                this.calcData();
            },
            error => {
                console.log(error);
            }
        );
    }

    calcData() {
        const itemsPerSwing = [12, 10, 8, 6, 5, 4, 3, 2, 1];
        for (let i = 0; i < itemsPerSwing.length; i++) {
            this.tableCargoTransferTime.push(this.tableCargoTransferTimeEntry(itemsPerSwing[i]));
        }

        const chests = [12, 6, 3];
        for (let i = 0; i < chests.length; i++) {
            this.tableChestFill.push(this.tableChestFillEntry(chests[i]));
        }
    }

    tableCargoTransferTimeEntry = (ipc: number): CargoTransferTimeModel => {
        return {
            itemsPerCycle: ipc,
            stack10: this.calcTransferTime(10, ipc),
            stack50: this.calcTransferTime(50, ipc),
            stack100: this.calcTransferTime(100, ipc),
            stack200: this.calcTransferTime(200, ipc),
        };
    }
    calcTransferTime(stackSize: number, itemsPerCycle: number): number {
        // ((this.cargoSlots * 10) - this.inserterCount * i) / ips
        if (stackSize < itemsPerCycle) { itemsPerCycle = stackSize; }
        const totalItemsPerCycle = itemsPerCycle * this.sheetData.inserterCount;
        const itemsPerSecond = totalItemsPerCycle * this.sheetData.inserterCyclesPerSecC2C.stack_inserter;
        const totalItems = this.sheetData.cargoSlots * stackSize;
        return (totalItems) / itemsPerSecond;
    }

    tableChestFillEntry = (chests: number): CargoChestFill => {
        return {
            chests: chests,
            slotsPerChest: this.calcCargoChestFill(chests, 1),
            stack10: this.calcCargoChestFill(chests, 10),
            stack50: this.calcCargoChestFill(chests, 50),
            stack100: this.calcCargoChestFill(chests, 100),
            stack200: this.calcCargoChestFill(chests, 200),
        };
    }
    slotItemEntry = (dec: number, round: number): SlotItem => {
        return { dec, round };
    }

    calcCargoChestFill(chests: number, stackSize: number): SlotItem {
        let result = this.sheetData.cargoSlots / chests * stackSize;
        result = stackSize === 1 ? result : Math.ceil(result);
        const remainder = result % stackSize;
        const resultRound = remainder === 0 ? result : result - remainder + stackSize;

        return this.slotItemEntry(result, resultRound);
    }
}
