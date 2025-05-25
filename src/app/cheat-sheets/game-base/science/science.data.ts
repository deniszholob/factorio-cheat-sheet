import { RawData } from 'app/models/Data.model';
import { ScienceData } from 'app/models/ScienceData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const SCIENCE_DATA: RawData<ScienceData> = {
  cheatSheet: {
    title: 'Science',
    iconId: FactorioIcons.Icons_Lab,
  },
  data: {
    packs: [
      {
        iconId: FactorioIcons.Icons_AutomationSciencePack,
        count: 5,
      },
      {
        iconId: FactorioIcons.Icons_LogisticSciencePack,
        count: 6,
      },
      {
        iconId: FactorioIcons.Icons_MilitarySciencePack,
        count: 5,
      },
      {
        iconId: FactorioIcons.Icons_ChemicalSciencePack,
        count: 12,
      },
      {
        iconId: FactorioIcons.Icons_ProductionSciencePack,
        count: 7,
      },
      {
        iconId: FactorioIcons.Icons_UtilitySciencePack,
        count: 7,
      },
    ],
    assembler2: {
      iconId: FactorioIcons.Icons_AssemblingMachine2,
      speed: '45/m',
    },
    assembler3: {
      iconId: FactorioIcons.Icons_AssemblingMachine3,
      speed: '75/m',
    },
    space2: {
      iconId: FactorioIcons.Icons_SpaceSciencePack,
      speed: '1R/22m',
    },
    space3: {
      iconId: FactorioIcons.Icons_SpaceSciencePack,
      speed: '1R/13m',
    },
  },
};
