import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

export class Data {
    constructor(
        public cheatSheet: CheatSheet,
        public data: any
    ) {
        this.cheatSheet = cheatSheet;
        this.data = data;
    }
}
