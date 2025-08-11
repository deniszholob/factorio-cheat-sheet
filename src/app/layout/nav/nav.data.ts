import { CheatSheetCategory } from 'app/cheat-sheets/cheat-sheets.module';
import { BALANCERS_SHEET_NAV } from 'app/cheat-sheets/game-base/balancers/balancers.data';
import { BELTS_SHEET_NAV } from 'app/cheat-sheets/game-base/belts/belts.component';
import { CARGO_WAGON_TRANSFER_SHEET_NAV } from 'app/cheat-sheets/game-base/cargo-wagon-transfer/cargo-wagon-transfer.data';
import { COMMON_RATIOS_SHEET_NAV } from 'app/cheat-sheets/game-base/cs-common-ratios/cs-common-ratios.component';
import { FLUID_WAGON_TRANSFER_SHEET_NAV } from 'app/cheat-sheets/game-base/fluid-wagon-transfer/fluid-wagon-transfer.data';
import { INSERTER_CAPACITY_BONUS_SHEET_NAV } from 'app/cheat-sheets/game-base/inserter-capacity-bonus/inserter-capacity-bonus.data';
import { INSERTER_THROUGHPUT_SHEET_NAV } from 'app/cheat-sheets/game-base/inserter-throughput/inserter-throughput.data';
import { LINKS_SHEET_NAV } from 'app/cheat-sheets/game-base/links/links.data';
import { MATERIAL_PROCESSING_SHEET_NAV } from 'app/cheat-sheets/game-base/material-processing/material-processing.data';
import { MINING_SHEET_NAV } from 'app/cheat-sheets/game-base/mining/mining.data';
import { MODULE_AND_BEACONS_SHEET_NAV } from 'app/cheat-sheets/game-base/modules-and-beacons/modules-and-beacons.component';
import { NUCLEAR_POWER_SHEET_NAV } from 'app/cheat-sheets/game-base/nuclear-power/nuclear-power.data';
import { OIL_REFINING_SHEET_NAV } from 'app/cheat-sheets/game-base/oil-refining/oil-refining.data';
import { POWER_SOLAR_SHEET_NAV } from 'app/cheat-sheets/game-base/power-solar/power-solar.component';
import { POWER_STEAM_SHEET_NAV } from 'app/cheat-sheets/game-base/power-steam/power-steam.component';
import { PRODUCTIVITY_MODULE_PAYOFFS_SHEET_NAV } from 'app/cheat-sheets/game-base/productivity-module-payoffs/productivity-module-payoffs.data';
import { SCIENCE_SHEET_NAV } from 'app/cheat-sheets/game-base/science/science.data';
import { SPACE_AGE_SHEET_NAV } from 'app/cheat-sheets/game-base/space-age/space-age.component';
import { TIPS_PAYOFFS_SHEET_NAV } from 'app/cheat-sheets/game-base/tips/tips.component';
import { TRAIN_COLOR_SHEET_NAV } from 'app/cheat-sheets/game-base/train-colors/train-colors.data';
import { TRAINS_SHEET_NAV } from 'app/cheat-sheets/game-base/trains/trains.component';
import { VEHICLE_FUEL_BONUS_SHEET_NAV } from 'app/cheat-sheets/game-base/vehicle-fuel-bonus/vehicle-fuel-bonus.data';
import { CONTRIBUTE_SHEET_NAV } from 'app/cheat-sheets/game-mods/contribute/contribute.component';
import { POPULAR_MODS_SHEET_NAV } from 'app/cheat-sheets/game-mods/popular-mods/popular-mods.component';
import { NavData } from 'app/shared/nav-data/nav-data.model';

export const NAV_BASE: NavData[] = [
  COMMON_RATIOS_SHEET_NAV,
  BELTS_SHEET_NAV,
  BALANCERS_SHEET_NAV, //TODO: convert to cheat-sheet-template
  MATERIAL_PROCESSING_SHEET_NAV, //TODO: convert to cheat-sheet-template
  MINING_SHEET_NAV, //TODO: convert to cheat-sheet-template
  SCIENCE_SHEET_NAV, //TODO: convert to cheat-sheet-template
  POWER_STEAM_SHEET_NAV,
  POWER_SOLAR_SHEET_NAV,
  NUCLEAR_POWER_SHEET_NAV, //TODO: convert to cheat-sheet-template
  OIL_REFINING_SHEET_NAV, //TODO: convert to cheat-sheet-template
  TRAINS_SHEET_NAV,
  FLUID_WAGON_TRANSFER_SHEET_NAV, //TODO: convert to cheat-sheet-template
  CARGO_WAGON_TRANSFER_SHEET_NAV, //TODO: convert to cheat-sheet-template
  INSERTER_THROUGHPUT_SHEET_NAV, //TODO: convert to cheat-sheet-template
  INSERTER_CAPACITY_BONUS_SHEET_NAV, //TODO: convert to cheat-sheet-template
  MODULE_AND_BEACONS_SHEET_NAV, //TODO: convert to cheat-sheet-template
  PRODUCTIVITY_MODULE_PAYOFFS_SHEET_NAV, //TODO: convert to cheat-sheet-template
  VEHICLE_FUEL_BONUS_SHEET_NAV, //TODO: convert to cheat-sheet-template
  TRAIN_COLOR_SHEET_NAV, //TODO: convert to cheat-sheet-template
  SPACE_AGE_SHEET_NAV,
  TIPS_PAYOFFS_SHEET_NAV, //TODO: convert to cheat-sheet-template
  LINKS_SHEET_NAV, //TODO: convert to cheat-sheet-template
  POPULAR_MODS_SHEET_NAV,
  //
  // COMBAT_SHEET_NAV, //TODO: convert to cheat-sheet-template
];

export const NAV_MODS: NavData[] = [
  CONTRIBUTE_SHEET_NAV,
  POPULAR_MODS_SHEET_NAV,
];

export const NAV_SHEET_DATA: Record<CheatSheetCategory, NavData[]> = {
  base: NAV_BASE,
  // mods: NAV_MODS,
};
