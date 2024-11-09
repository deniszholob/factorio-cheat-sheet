// Angular Imports
import { Component, Input } from '@angular/core';

import { FactorioIcon } from './factorio-icon.model';

const SPACE_AGE_ICON =
  'https://wiki.factorio.com/images/thumb/Space_age_icon.png/16px-Space_age_icon.png';
const SPACE_AGE_TEXT = 'Space Age Only';

@Component({
  selector: 'app-factorio-icon',
  templateUrl: './factorio-icon.component.html',
  styleUrls: ['./factorio-icon.component.scss'],
})
export class FactorioIconComponent {
  protected readonly SPACE_AGE_ICON = SPACE_AGE_ICON;
  protected readonly SPACE_AGE_TEXT = SPACE_AGE_TEXT;

  @Input()
  public icon?: FactorioIcon;

  @Input()
  public spaceAge?: boolean = false;
}
