import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from 'app/services';
import { FactorioIconModule } from 'app/shared';

import { POWER_SOLAR_DATA } from '../power-solar.data';

interface SolarCalcData {
  solarPanels: number;
  accumulators: number;
  usablePower: number;
}

@Component({
  selector: 'app-calculator-solar',
  templateUrl: './calculator-solar.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, FactorioIconModule],
})
export class CalculatorSolarComponent {
  @Input()
  public solarPowerEffectiveness: number =
    POWER_SOLAR_DATA.solarPowerEffectiveness;
  public _solarAvgMw: number = POWER_SOLAR_DATA.solarEnergyAvgKw / 1000; // MW
  @Input()
  public set solarAvgMw(solarAvgMw: number) {
    this._solarAvgMw = solarAvgMw;
    this.onCalcFromSolar();
  }
  public get solarAvgMw(): number {
    return this._solarAvgMw;
  }

  constructor(protected dataService: DataService) {
    this.onCalcFromSolar();
  }

  protected solarCalcData: SolarCalcData = {
    solarPanels: 850,
    accumulators: 21,
    usablePower: 0.7,
  };

  protected onCalcFromSolar(): void {
    this.solarCalcData.accumulators = this.getAccumulatorsFromSolar(
      this.solarCalcData.solarPanels
    );
    this.solarCalcData.usablePower = this.getPowerFromSolar(
      this.solarCalcData.solarPanels
    );
  }

  protected onCalcFromPower(): void {
    this.solarCalcData.solarPanels = this.getSolarFromPower(
      this.solarCalcData.usablePower
    );
    this.solarCalcData.accumulators = this.getAccumulatorsFromSolar(
      this.solarCalcData.solarPanels
    );
  }

  protected onCalcFromAccumulators(): void {
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
