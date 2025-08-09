// Angular Imports
import { Component, Input } from '@angular/core';

import { FACTORIO_ICONS_INFO, FactorioIcons } from '../factorio-icons.enum';
import { FactorioIcon } from './factorio-icon.model';

export const SPACE_AGE_ICON = FactorioIcons.Icons_SpaceAge;
export const SPACE_AGE_ICON_URL = FACTORIO_ICONS_INFO[SPACE_AGE_ICON].url;
export const SPACE_AGE_TEXT = 'Space Age Only';

@Component({
  selector: 'app-factorio-icon',
  templateUrl: './factorio-icon.component.html',
  styleUrls: ['./factorio-icon.component.scss'],
})
export class FactorioIconComponent {
  protected readonly SPACE_AGE_ICON_URL = SPACE_AGE_ICON_URL;
  protected readonly SPACE_AGE_TEXT = SPACE_AGE_TEXT;

  @Input()
  public icon?: FactorioIcon;

  @Input()
  public spaceAge?: boolean = false;
}
