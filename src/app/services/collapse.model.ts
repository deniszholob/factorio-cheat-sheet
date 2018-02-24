export class Collapse {
    constructor(
        public doCollapse: boolean,
        public id?: string
    ) {
        this.doCollapse = doCollapse;
        this.id = id;
    }
}
