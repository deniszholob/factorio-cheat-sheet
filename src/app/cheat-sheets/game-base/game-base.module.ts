import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BalancersModule } from './balancers/balancers.module';
import { BeltsComponent } from './belts/belts.component';
import { CargoWagonTransferModule } from './cargo-wagon-transfer/cargo-wagon-transfer.module';
import { CsCommonRatiosComponent } from './cs-common-ratios/cs-common-ratios.component';
import { FluidWagonTransferModule } from './fluid-wagon-transfer/fluid-wagon-transfer.module';
import { GameBaseComponent } from './game-base.component';
import { ROUTES_GAME_BASE } from './game-base.routes';
import { InserterCapacityBonusModule } from './inserter-capacity-bonus/inserter-capacity-bonus.module';
import { InserterThroughputModule } from './inserter-throughput/inserter-throughput.module';
import { LinksModule } from './links/links.module';
import { MaterialProcessingModule } from './material-processing/material-processing.module';
import { MiningModule } from './mining/mining.module';
import { ModulesAndBeaconsModule } from './modules-and-beacons/modules-and-beacons.module';
import { NuclearPowerModule } from './nuclear-power/nuclear-power.module';
import { OilRefiningModule } from './oil-refining/oil-refining.module';
import { PowerSolarComponent } from './power-solar/power-solar.component';
import { PowerSteamComponent } from './power-steam/power-steam.component';
import { ProductivityModulePayoffsModule } from './productivity-module-payoffs/productivity-module-payoffs.module';
import { ScienceModule } from './science/science.module';
import { SpaceAgeComponent } from './space-age/space-age.component';
import { TipsModule } from './tips/tips.module';
import { TrainColorsModule } from './train-colors/train-colors.module';
import { TrainsComponent } from './trains/trains.component';
import { VehicleFuelBonusModule } from './vehicle-fuel-bonus/vehicle-fuel-bonus.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_GAME_BASE),
    // Sheets
    BalancersModule,
    BeltsComponent,
    CargoWagonTransferModule,
    // CombatModule,
    CsCommonRatiosComponent,
    FluidWagonTransferModule,
    InserterCapacityBonusModule,
    InserterThroughputModule,
    LinksModule,
    MaterialProcessingModule,
    MiningModule,
    ModulesAndBeaconsModule,
    NuclearPowerModule,
    OilRefiningModule,
    PowerSolarComponent,
    PowerSteamComponent,
    ProductivityModulePayoffsModule,
    ScienceModule,
    TipsModule,
    TrainColorsModule,
    VehicleFuelBonusModule,
    SpaceAgeComponent,
    TrainsComponent,
  ],
  declarations: [GameBaseComponent],
  exports: [GameBaseComponent],
})
export class GameBaseModule {}
