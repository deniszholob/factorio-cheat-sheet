import { Component, Input } from '@angular/core';

export interface RatioItem {
  machineIconId: string;
  productIconId: string;
  count?: number;
  rate?: string;
}

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
})
export class RatioComponent {
  @Input()
  public ratios: RatioItem[] = [
    {
      machineIconId: 'Assembling_machine_3',
      productIconId: 'Automation_science_pack',
      count: 10,
      rate: '2.5/s',
    },
    {
      machineIconId: 'Assembling_machine_3',
      productIconId: 'Iron_gear_wheel',
      count: 1,
    },
  ];
}
