import { Component, Input } from '@angular/core';
import { DataService } from 'app/services';

interface SolarCalcData {
  solarPanels: number;
  accumulators: number;
  usablePower: number;
}

@Component({
  selector: 'app-calculator-solar',
  templateUrl: './calculator-solar.component.html',
})
export class CalculatorSolarComponent {
  @Input()
  public solarPowerRatio = 0.7;
  @Input()
  public solarAvgMw: number = 42 / 1000; // MW

  constructor(public dataService: DataService) {
    this.onCalcFromSolar();
  }

  public solarCalcData: SolarCalcData = {
    solarPanels: 850,
    accumulators: 21,
    usablePower: 0.7,
  };

  public onCalcFromSolar(): void {
    this.solarCalcData.accumulators = this.getAccumulatorsFromSolar(
      this.solarCalcData.solarPanels
    );
    this.solarCalcData.usablePower = this.getPowerFromSolar(
      this.solarCalcData.solarPanels
    );
  }

  public onCalcFromPower(): void {
    this.solarCalcData.solarPanels = this.getSolarFromPower(
      this.solarCalcData.usablePower
    );
    this.solarCalcData.accumulators = this.getAccumulatorsFromSolar(
      this.solarCalcData.solarPanels
    );
  }

  public onCalcFromAccumulators(): void {
    this.solarCalcData.solarPanels = this.getSolarFromAccumulators(
      this.solarCalcData.accumulators
    );
    this.solarCalcData.usablePower = this.getPowerFromSolar(
      this.solarCalcData.solarPanels
    );
  }

  private getAccumulatorsFromSolar(solarCount: number): number {
    return (solarCount / 25) * 21;
  }
  private getSolarFromAccumulators(accumulatorCount: number): number {
    return (accumulatorCount / 21) * 25;
  }
  private getPowerFromSolar(solarPanels: number): number {
    return solarPanels * this.solarAvgMw;
  }
  private getSolarFromPower(power: number): number {
    return power / this.solarAvgMw;
  }
}
