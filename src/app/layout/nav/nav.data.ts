import { CheatSheetCategory } from 'app/cheat-sheets/cheat-sheets.module';
import { BELTS_SHEET_TITLE } from 'app/cheat-sheets/game-base/belts/belts.component';
import { CS_COMMON_RATIOS_SHEET_TITLE } from 'app/cheat-sheets/game-base/cs-common-ratios/cs-common-ratios.component';
import { POWER_SOLAR_SHEET_TITLE } from 'app/cheat-sheets/game-base/power-solar/power-solar.component';
import { POWER_STEAM_SHEET_TITLE } from 'app/cheat-sheets/game-base/power-steam/power-steam.component';
import { SPACE_AGE_SHEET_TITLE } from 'app/cheat-sheets/game-base/space-age/space-age.component';
import { CONTRIBUTE_SHEET_TITLE } from 'app/cheat-sheets/game-mods/contribute/contribute.component';
import { POPULAR_MODS_SHEET_TITLE } from 'app/cheat-sheets/game-mods/popular-mods/popular-mods.component';
import { getIdFromTitle } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';

export const NAV_BASE: string[] = [
  getIdFromTitle(CS_COMMON_RATIOS_SHEET_TITLE),
  getIdFromTitle(BELTS_SHEET_TITLE),
  'balancers',
  'material-processing',
  'mining',
  'science',
  getIdFromTitle(POWER_STEAM_SHEET_TITLE),
  getIdFromTitle(POWER_SOLAR_SHEET_TITLE),
  'nuclear-power',
  'oil-refining',
  'fluid-wagon-transfer',
  'cargo-wagon-transfer',
  'inserter-throughput',
  'inserter-capacity-bonus',
  'modules-and-beacons',
  'productivity-module-payoffs',
  'vehicle-fuel-bonus',
  'train-colors',
  getIdFromTitle(SPACE_AGE_SHEET_TITLE),
  'tips',
  'links',
];

export const NAV_MODS: string[] = [
  getIdFromTitle(CONTRIBUTE_SHEET_TITLE),
  getIdFromTitle(POPULAR_MODS_SHEET_TITLE),
];

export const NAV_ANCHOR_TAGS: Record<CheatSheetCategory, string[]> = {
  base: NAV_BASE,
  // mods: NAV_MODS,
};
