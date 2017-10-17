export class Collapse {
    public doCollapse: boolean;
    public id: string;

    constructor(
        doCollapse: boolean,
        id?: string
    ) {
        this.doCollapse = doCollapse;
        this.id = id;
    }
}
