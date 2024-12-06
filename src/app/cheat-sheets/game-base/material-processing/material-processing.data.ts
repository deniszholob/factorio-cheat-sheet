import { RawData } from 'app/models/Data.model';
import { MaterialProcessingData } from 'app/models/MaterialProcessingData.model';

export const MATERIAL_PROCESSING_DATA: RawData<MaterialProcessingData> = {
  cheatSheet: {
    title: 'Material Processing',
    icon: 'Item-group_intermediate_products',
  },
  data: {
    beltEmpty: [
      {
        processor: ['Stone_furnace'],
        material: ['Copper_ore', 'Iron_ore', 'Iron_plate'],
        beltYellow: 48,
        beltRed: 96,
        beltBlue: 144,
        beltGreen: 192,
      },
      {
        processor: ['Steel_furnace', 'Electric_furnace'],
        material: ['Copper_ore', 'Iron_ore', 'Iron_plate'],
        beltYellow: 24,
        beltRed: 48,
        beltBlue: 72,
        beltGreen: 96,
      },
      {
        processor: ['Stone_furnace'],
        material: ['Stone'],
        beltYellow: 24,
        beltRed: 48,
        beltBlue: 72,
        beltGreen: 96,
      },
      {
        processor: ['Steel_furnace', 'Electric_furnace'],
        material: ['Stone'],
        beltYellow: 12,
        beltRed: 24,
        beltBlue: 36,
        beltGreen: 48,
      },
      {
        processor: ['Centrifuge'],
        material: ['Uranium_ore'],
        beltYellow: 18,
        beltRed: 36,
        beltBlue: 54,
        beltGreen: 72,
      },
    ],
    beltFill: [
      {
        processor: ['Stone_furnace'],
        material: ['Copper_plate', 'Iron_plate', 'Stone_brick'],
        beltYellow: 48,
        beltRed: 96,
        beltBlue: 144,
        beltGreen: 192,
      },
      {
        processor: ['Steel_furnace', 'Electric_furnace'],
        material: ['Copper_ore', 'Iron_ore', 'Iron_plate'],
        beltYellow: 24,
        beltRed: 48,
        beltBlue: 72,
        beltGreen: 96,
      },
      {
        processor: ['Stone_furnace'],
        material: ['Steel_plate'],
        beltYellow: 240,
        beltRed: 480,
        beltBlue: 720,
        beltGreen: 960,
      },
      {
        processor: ['Steel_furnace', 'Electric_furnace'],
        material: ['Steel_plate'],
        beltYellow: 120,
        beltRed: 240,
        beltBlue: 360,
        beltGreen: 480,
      },
      {
        processor: ['Centrifuge'],
        material: ['Uranium-235', 'Uranium-238'],
        beltYellow: 180,
        beltRed: 360,
        beltBlue: 540,
        beltGreen: 720,
      },
    ],
  },
};
