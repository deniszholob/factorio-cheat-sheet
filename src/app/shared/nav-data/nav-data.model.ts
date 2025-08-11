import { getIdFromTitle } from '../cheat-sheet-template/cheat-sheet-template.component';
import { FactorioIcons } from '../factorio-icons.enum';

export interface NavData {
  title: string;
  sheetId: string;
  sheetIconId: FactorioIcons;
}

export function newNavData(title: string, sheetIcon: FactorioIcons): NavData {
  return {
    title,
    sheetId: getIdFromTitle(title),
    sheetIconId: sheetIcon,
  };
}
