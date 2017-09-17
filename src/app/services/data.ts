import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

export class Data {
    cheatSheet: CheatSheet;
    data: any;

    constructor(
        cheatSheet: CheatSheet,
        data: any
    ) {
        this.cheatSheet = cheatSheet;
        this.data = data;
    }
}
