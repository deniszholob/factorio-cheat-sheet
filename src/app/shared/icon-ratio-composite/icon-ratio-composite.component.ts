import { Component, Input } from '@angular/core';
import { DataService } from 'app/services';

import { FactorioIcon } from '../factorio-icon/factorio-icon.model';
import { FactorioIcons } from '../factorio-icons.enum';

@Component({
  selector: 'app-icon-ratio-composite',
  templateUrl: './icon-ratio-composite.component.html',
})
export class IconRatioCompositeComponent {
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

  public machineIcon: FactorioIcon = new FactorioIcon('');
  public productIcon?: FactorioIcon;

  constructor(private dataService: DataService) {
    this.machineIconId = FactorioIcons.Icons_AssemblingMachine3;
  }
}
