import { Component, Input } from '@angular/core';
import { DataService } from 'app/services';

import {
  SPACE_AGE_ICON_URL,
  SPACE_AGE_TEXT,
} from '../factorio-icon/factorio-icon.component';
import { FactorioIcon } from '../factorio-icon/factorio-icon.model';
import { FactorioIcons } from '../factorio-icons.enum';

@Component({
  selector: 'app-icon-ratio-composite',
  templateUrl: './icon-ratio-composite.component.html',
})
export class IconRatioCompositeComponent {
  protected readonly SPACE_AGE_ICON_URL = SPACE_AGE_ICON_URL;
  protected readonly SPACE_AGE_TEXT = SPACE_AGE_TEXT;

  @Input()
  public set machineIconId(
    machineIconId: FactorioIcons | 'AssemblingMachineCombined'
  ) {
    this.machineIcon = this.dataService.getFactorioIcon(machineIconId);
  }
  @Input()
  public set productIconId(productIconId: FactorioIcons) {
    this.productIcon = this.dataService.getFactorioIcon(productIconId);
  }
  @Input()
  public count?: number | string = 0;
  @Input()
  public rateSeconds?: number;

  @Input()
  public spaceAge?: boolean = false;

  public machineIcon: FactorioIcon = new FactorioIcon('');
  public productIcon?: FactorioIcon;

  constructor(private dataService: DataService) {
    this.machineIconId = FactorioIcons.Icons_AssemblingMachine3;
  }
}
