import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface Data<T> {
  cheatSheet: CheatSheet;
  data: T;
}

export interface RawData<T> {
  cheatSheet: RawCheatSheet;
  data: T;
}

export interface RawCheatSheet {
  title: string;
  iconId: FactorioIcons;
}
