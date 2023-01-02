import { CheatSheetCategory } from 'app/cheat-sheets/cheat-sheets.module';

export const NAV_BASE: string[] = [
  'common-ratios',
  'belts',
  'balancers',
  'material-processing',
  'mining',
  'science',
  'basic-power',
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
  'tips',
  'links',
];
export const NAV_MODS: string[] = ['contribute', 'popular-mod-list'];

export const NAV_ANCHOR_TAGS: Record<CheatSheetCategory, string[]> = {
  base: NAV_BASE,
  mods: NAV_MODS,
};
