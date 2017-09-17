import { FactorioIcon } from 'app/shared/factorio-icon/factorio-icon.model';

const PREFIX = 'cs-';

export class CheatSheet {
    icon: FactorioIcon;
    title: string;
    isCollapsed: boolean;
    name: string;

    constructor(
        icon: FactorioIcon,
        title: string
    ) {
        this.icon = icon;
        this.title = title || '';
        this.name = this.title.replace(' ', '-').toLocaleLowerCase();
        this.isCollapsed = false;
    }
}
