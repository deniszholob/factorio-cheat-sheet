import { FactorioIcons } from '../factorio-icons.enum';

export interface FactorioIconData {
  iconId: FactorioIcons;
  text?: string;
  spaceAge?: boolean;
}

export class FactorioIcon {
  src: string;
  text?: string;
  name: string;

  constructor(src: string, text?: string, name?: string) {
    this.src = src;
    this.text = text;
    this.name = name || '';
  }
}
