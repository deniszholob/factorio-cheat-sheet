// import { faker } from '@faker-js/faker';

import { QualityTableEntry } from './quality-table-entry.model';

// ===== Simple Mock ====== //
export const MOCK_QualityTableEntry: QualityTableEntry = {
  Normal: 1,
  Uncommon: 1.3,
  Rare: 1.6,
  Epic: 1.9,
  Legendary: 2.5,
};

export const MOCK_QualityTableEntry_Array: QualityTableEntry[] = [
  MOCK_QualityTableEntry,
];

// ===== Advanced Mock with https://v9.fakerjs.dev/api/ ====== //
// export function createMock_QualityTableEntry(): QualityTableEntry {
//   return {
//     id: faker.string.uuid(),
//   };
// }

// export function createMock_QualityTableEntry_Array(count: number): QualityTableEntry[] {
//   return faker.helpers.multiple(createMock_QualityTableEntry, { count });
// }

// export const MOCK_QualityTableEntry: QualityTableEntry = createMock_QualityTableEntry();
// export const MOCK_QualityTableEntry_Array: QualityTableEntry[] = createMock_QualityTableEntry_Array(5);
