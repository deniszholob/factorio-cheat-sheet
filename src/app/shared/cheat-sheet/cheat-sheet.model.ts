import { FactorioIcon } from 'app/shared/factorio-icon/factorio-icon.model';

const PREFIX = 'cs-';

export class CheatSheet {
    icon: FactorioIcon;
    title: string;
    isCollapsed: boolean;
    id: string;

    constructor(
        icon: FactorioIcon,
        title: string,
        isCollapsed?: boolean
    ) {
        this.icon = icon;
        this.title = title || '';
        this.id = this.title.replace(/ /g, '-').toLocaleLowerCase();
        this.isCollapsed = isCollapsed || false;
    }

    /** Toggle the isCollapsed Flag */
    public toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }

    /** Collapse the sheet by setting isCollapsed Flag true */
    public collapse() {
        this.isCollapsed = true;
    }

    /** Expand the sheet by setting isCollapsed Flag false */
    public expand() {
        this.isCollapsed = false;
    }
}
