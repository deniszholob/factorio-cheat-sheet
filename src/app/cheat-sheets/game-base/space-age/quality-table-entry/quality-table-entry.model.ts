import { Quality } from '../quality.enum';

export type QualityTableEntry = Record<Quality, number>;

export type QualityQualityTable = [
  QualityTableEntry,
  QualityTableEntry,
  QualityTableEntry
];
