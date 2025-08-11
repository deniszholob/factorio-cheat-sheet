// import { faker } from '@faker-js/faker';

import { FactorioIcons } from '../factorio-icons.enum';
import { NavData } from './nav-data.model';

// ===== Simple Mock ====== //
export const MOCK_NavData: NavData = {
  title: 'My Title',
  sheetId: 'my-title',
  sheetIconId: FactorioIcons.Core_Factorio,
};

export const MOCK_NavData_Array: NavData[] = [MOCK_NavData];

// ===== Advanced Mock with https://v9.fakerjs.dev/api/ ====== //
// export function createMock_NavData(): NavData {
//   return {
//     id: faker.string.uuid(),
//   };
// }

// export function createMock_NavData_Array(count: number): NavData[] {
//   return faker.helpers.multiple(createMock_NavData, { count });
// }

// export const MOCK_NavData: NavData = createMock_NavData();
// export const MOCK_NavData_Array: NavData[] = createMock_NavData_Array(5);
