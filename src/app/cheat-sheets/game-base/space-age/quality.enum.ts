import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export enum Quality {
  Normal = 'Normal',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Epic = 'Epic',
  Legendary = 'Legendary',
}

export const QUALITY_OPTIONS: Quality[] = Object.values(Quality);

export function isQuality(value: string): value is Quality {
  return QUALITY_OPTIONS.includes(value as Quality);
}

export const QUALITY_DISPLAY: Record<Quality, FactorioIcons> = {
  [Quality.Normal]: FactorioIcons.Icons_QualityNormal,
  [Quality.Uncommon]: FactorioIcons.Icons_QualityUncommon,
  [Quality.Rare]: FactorioIcons.Icons_QualityRare,
  [Quality.Epic]: FactorioIcons.Icons_QualityEpic,
  [Quality.Legendary]: FactorioIcons.Icons_QualityLegendary,
};

// export interface QualityInfo {
//   id: Quality;
//   display: string;
// }

// export const QUALITY_INFO: Record<Quality, QualityInfo> = {
//   [Quality.OptionId1]: {
//     id: Quality.OptionId1,
//     display: 'Option Id 1',
//   },
// } as const;

// export const QUALITY_INFO_OPTIONS: QualityInfo[] =
//   QUALITY_OPTIONS.map(
//     (o: Quality): QualityInfo => QUALITY_INFO[o],
//   );
