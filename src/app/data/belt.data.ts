import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface BeltData {
  beltDensity: number;
  beltInfo: BeltInfo[];
}

export interface BeltInfo {
  spaceAge?: boolean;
  iconId: FactorioIcons;
  throughput: number;
  undergroundSpacing: number;
  icons: FactorioIcons[];
}

export const BELT_DATA: BeltData = {
  beltDensity: 8,
  beltInfo: [
    {
      iconId: FactorioIcons.Icons_TransportBelt,
      throughput: 15,
      undergroundSpacing: 4,
      icons: [
        FactorioIcons.Icons_TransportBelt,
        FactorioIcons.Icons_UndergroundBelt,
        FactorioIcons.Icons_Splitter,
      ],
    },
    {
      iconId: FactorioIcons.Icons_FastTransportBelt,
      throughput: 30,
      undergroundSpacing: 6,
      icons: [
        FactorioIcons.Icons_FastTransportBelt,
        FactorioIcons.Icons_FastUndergroundBelt,
        FactorioIcons.Icons_FastSplitter,
      ],
    },
    {
      iconId: FactorioIcons.Icons_ExpressTransportBelt,
      throughput: 45,
      undergroundSpacing: 8,
      icons: [
        FactorioIcons.Icons_ExpressTransportBelt,
        FactorioIcons.Icons_ExpressUndergroundBelt,
        FactorioIcons.Icons_ExpressSplitter,
      ],
    },
    {
      iconId: FactorioIcons.Icons_TurboTransportBelt,
      throughput: 60,
      undergroundSpacing: 10,
      icons: [
        FactorioIcons.Icons_TurboTransportBelt,
        FactorioIcons.Icons_TurboUndergroundBelt,
        FactorioIcons.Icons_TurboSplitter,
      ],
      spaceAge: true,
    },
  ],
};
