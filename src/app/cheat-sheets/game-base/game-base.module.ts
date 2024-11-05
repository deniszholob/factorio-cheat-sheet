import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BalancersModule } from './balancers/balancers.module';
import { BasicPowerModule } from './basic-power/basic-power.module';
import { BeltsModule } from './belts/belts.module';
import { CargoWagonTransferModule } from './cargo-wagon-transfer/cargo-wagon-transfer.module';
import { CsCommonRatiosModule } from './cs-common-ratios/cs-common-ratios.module';
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
import { ProductivityModulePayoffsModule } from './productivity-module-payoffs/productivity-module-payoffs.module';
import { ScienceModule } from './science/science.module';
import { TipsModule } from './tips/tips.module';
import { TrainColorsModule } from './train-colors/train-colors.module';
import { VehicleFuelBonusModule } from './vehicle-fuel-bonus/vehicle-fuel-bonus.module';
import { SpaceAgeComponent } from './space-age/space-age.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_GAME_BASE),

    // Sheets
    BalancersModule,
    BasicPowerModule,
    BeltsModule,
    CargoWagonTransferModule,
    // CombatModule,
    CsCommonRatiosModule,
    FluidWagonTransferModule,
    InserterCapacityBonusModule,
    InserterThroughputModule,
    LinksModule,
    MaterialProcessingModule,
    MiningModule,
    ModulesAndBeaconsModule,
    NuclearPowerModule,
    OilRefiningModule,
    ProductivityModulePayoffsModule,
    ScienceModule,
    TipsModule,
    TrainColorsModule,
    VehicleFuelBonusModule,
    SpaceAgeComponent,
  ],
  declarations: [GameBaseComponent],
  exports: [GameBaseComponent],
})
export class GameBaseModule {}
