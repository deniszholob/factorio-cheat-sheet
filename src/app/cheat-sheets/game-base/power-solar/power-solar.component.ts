import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Planets,
  PLANETS_INFO,
  PLANETS_INFO_OPTIONS,
  PlanetsInfo,
  SimpleRatio,
} from 'app/data';
import { Link } from 'app/models/LinksData.model';
import { DataService } from 'app/services';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';

import { CalculatorSolarComponent } from './calculator-solar/calculator-solar.component';
import { POWER_SOLAR_DATA, PowerSolarData } from './power-solar.data';
import {
  SOLAR_ACCUMULATOR_PLANET_RATIOS,
  SolarAccumulatorRatio,
} from './solar-calc/solar-calc.util';

export interface PlanetRatioUIInfo {
  planetRatioData: SolarAccumulatorRatio;
  onePanelRatio: SimpleRatio[] | undefined;
  mwRatioPower: number;
  mwRatioGround: SimpleRatio[] | undefined;
  mwRatioSpace: SimpleRatio[] | undefined;
}

export const POWER_SOLAR_SHEET_ICON = 'Solar_panel';
export const POWER_SOLAR_SHEET_TITLE = 'Solar Power';

@Component({
  selector: 'app-power-solar',
  templateUrl: './power-solar.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [
    CommonModule,
    FactorioIconModule,
    CheatSheetTemplateComponent,
    CalculatorSolarComponent,
    NgbDropdownModule,
  ],
})
export class PowerSolarComponent {
  protected readonly cheatSheetIconId: string = POWER_SOLAR_SHEET_ICON;
  protected readonly cheatSheetTitle: string = POWER_SOLAR_SHEET_TITLE;

  // protected QUALITY_OPTIONS = ['low', 'medium', 'high'];
  protected readonly PLANETS_INFO_OPTIONS = PLANETS_INFO_OPTIONS;
  protected readonly POWER_SOLAR_DATA: PowerSolarData = POWER_SOLAR_DATA;
  protected readonly SOLAR_ACCUMULATOR_PLANET_RATIOS =
    SOLAR_ACCUMULATOR_PLANET_RATIOS;

  protected readonly REFERENCES: Link[] = [
    {
      text: 'Wiki: Optimal ratio',
      url: 'https://wiki.factorio.com/Power_production',
    },
    {
      text: 'Wiki: Time',
      url: 'https://wiki.factorio.com/Time#Days',
    },
    {
      text: 'Wiki: Solar Panel',
      url: 'https://wiki.factorio.com/Solar_panel',
    },
    {
      text: 'Wiki: Solar Accumulator',
      url: 'https://wiki.factorio.com/Accumulator',
    },
    {
      text: 'Forums: Solar Power in SA',
      url: 'https://forums.factorio.com/viewtopic.php?p=630081',
    },
    {
      text: 'Forums: Cilya Formula',
      url: 'https://forums.factorio.com/viewtopic.php?f=5&t=5594',
    },
    {
      text: 'Forums: JasonC Formula',
      url: 'https://forums.factorio.com/viewtopic.php?p=143317#p143317',
    },
    {
      text: 'Forums: Frighting Day Night',
      url: 'https://forums.factorio.com/viewtopic.php?p=629003#p629003',
    },
  ];

  protected dropdownOpen: boolean = false;
  protected selectedPlanet: PlanetsInfo = PLANETS_INFO[Planets.Nauvis];
  protected selectedPlanetRatio = this.getPlanetRatio(this.selectedPlanet.id);

  private getPlanetRatio(planetId: Planets): PlanetRatioUIInfo {
    const planetRatioData: SolarAccumulatorRatio | undefined =
      SOLAR_ACCUMULATOR_PLANET_RATIOS.find(
        (v: SolarAccumulatorRatio): boolean => v.planet === planetId
      );
    if (!planetRatioData) throw new Error('No planet ratio data');

    const powerMw = 1;
    const powerKw = powerMw * 1000;
    const solarPanelSpaceCount =
      powerKw / planetRatioData.effectiveSolarPowerSpaceKw;
    const solarPanelGroundCount =
      powerKw / planetRatioData.effectiveSolarPowerGroundKw;
    const accumulatorGroundCount =
      solarPanelGroundCount * planetRatioData.solarAccumulatorRatioGround;

    return {
      planetRatioData,
      onePanelRatio: solarPanelGroundCount
        ? [
            { iconId: 'Solar_panel', count: 1 },
            {
              iconId: 'Accumulator',
              count: planetRatioData.solarAccumulatorRatioGround,
            },
          ]
        : undefined,
      mwRatioPower: powerMw,
      mwRatioGround: solarPanelGroundCount
        ? [
            { iconId: 'Solar_panel', count: solarPanelGroundCount },
            { iconId: 'Accumulator', count: accumulatorGroundCount },
          ]
        : undefined,
      mwRatioSpace: [{ iconId: 'Solar_panel', count: solarPanelSpaceCount }],
    };
  }

  protected toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  protected selectPlanet(planet: PlanetsInfo): void {
    this.selectedPlanet = planet;
    this.selectedPlanetRatio = this.getPlanetRatio(this.selectedPlanet.id);
    this.dropdownOpen = false;
  }

  constructor(protected dataService: DataService) {}
}
