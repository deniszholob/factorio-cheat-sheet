import { RawData } from 'app/models/Data.model';
import { InserterCapacityBonusData } from 'app/models/InserterCapacityBonusData.model';

export const INSERTER_CAPACITY_BONUS_DATA: RawData<InserterCapacityBonusData> =
  {
    cheatSheet: {
      title: 'Inserter Capacity Bonus',
      icon: 'Inserter_capacity_bonus_(research)',
    },
    data: {
      bonuses: [
        {
          tech: '0',
          nonStackItems: '1',
          nonStackBonus: 'base',
          bulkItems: '2',
          bulkBonus: 'base',
          stackItems: '6',
          stackBonus: 'base',
        },
        {
          tech: '1',
          nonStackItems: '',
          nonStackBonus: '',
          bulkItems: '3',
          bulkBonus: '+1',
          stackItems: '7',
          stackBonus: '+1',
        },
        {
          tech: '2',
          nonStackItems: '2',
          nonStackBonus: '+1',
          bulkItems: '4',
          bulkBonus: '+1',
          stackItems: '8',
          stackBonus: '+1',
        },
        {
          tech: '3',
          nonStackItems: '',
          nonStackBonus: '',
          bulkItems: '5',
          bulkBonus: '+1',
          stackItems: '9',
          stackBonus: '+1',
        },
        {
          tech: '4',
          nonStackItems: '',
          nonStackBonus: '',
          bulkItems: '6',
          bulkBonus: '+1',
          stackItems: '10',
          stackBonus: '+1',
        },
        {
          tech: '5',
          nonStackItems: '',
          nonStackBonus: '',
          bulkItems: '8',
          bulkBonus: '+2',
          stackItems: '12',
          stackBonus: '+2',
        },
        {
          tech: '6',
          nonStackItems: '',
          nonStackBonus: '',
          bulkItems: '10',
          bulkBonus: '+2',
          stackItems: '14',
          stackBonus: '+2',
        },
        {
          tech: '7',
          nonStackItems: '3',
          nonStackBonus: '+1',
          bulkItems: '12',
          bulkBonus: '+2',
          stackItems: '16',
          stackBonus: '+2',
        },
      ],
    },
  };
