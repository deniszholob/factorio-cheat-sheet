export class FactorioIcon {
    src: string;
    text: string;
    name: string;

    constructor(
        src: string,
        text?: string,
        name?: string
    ) {
        this.src = src;
        this.text = text || null;
        this.name = name || '';
    }
}
