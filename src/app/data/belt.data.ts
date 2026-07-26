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

/**
 * TODO: Add this to data
 *
 * yellow belt cost
 *   1 belt: 3 iron plates
 *   2 underground: 17.5 iron plates
 *   splitter: 16.5 iron plates + 7.5 copper
 * red belt
 *  1 belt: 11.5 iron plate
 *  2 underground: 97.5 iron plates
 *  1 splitter: 46 iron plates + 22.5 copper
 * blue belt
 *
 * green belt
 */

/**
 * TODO: save this data in a structured way
 * Create function to recursively get total raw cost: example: 1 yellow belt = 3 iron plates because 1iron + 1 gear and gear is 2 iron
 *
 * i want comparisons for belts vs max underground distance (yellow belt has 4 tiles inbetween ends + 2 ends = 6 total tiles so compare 2 underground belt cost with 6 belt cost)
 * i want comparisons for splitter vs inserter (yellow splitter vs res spliter vs yellow inserter vs red inserter vs blue inserter vs blue inserter vs green inserter)
 *
 * note: strings in () are actual in game names and [] are nicknames
 * [iron](iron plate)
 * [gear](iron gear wheel)
 * [copper](copper plate)
 * [copper wire](copper cable)
 * [green circuit][GC](electronic circuit)
 * [red circuit][RC](advanced circuit)
 * [blue circuit][BC](processing unit)
 * [yellow belt](transport belt)
 * [red belt](fast transport belt)
 * [blue belt](express transport belt)
 * [green belt](turbo transport belt)
 * [yellow inserter](inserter)
 * [red inserter](long-handed inserter)
 * [blue inserter](fast inserter)
 * [green inserter](bulk inserter)
 * [lube](lubricant)
 * [plastic](plastic bar)
 * [acid](sulfuric acid)
 *
 * tungsten = 4 tungsten ore + 10 molten iron
 * 1 gear = 2 iron
 * 2 copper wire = 1 copper
 * 1 GC= 1 iron + 3 copper wire
 * 1 RC = 2 gc + 4 copper wire + 2 plastic
 * 1 BC = 2 rc + 20 gc + 5 acid
 *
 * yellow belt (transport belt)
 *  1 belt: 1 iron + 1 gear
 *  2 underground: 10 iron + 5 yellow belt
 *  1 splitter: 5 iron + 5 GC + 4 yellow belt
 * red belt
 *  1 belt: 5 gear + 1 yellow belt
 *  2 underground: 40 gear + 2 yellow underground
 *  1 splitter: 10 gear + 10 GC + 1 yellow splitter
 * blue belt
 *  1 belt: 10 gear + 1 red belt + 20 lube
 *  2 underground: 80 gear + 2 red underground + 40 lube
 *  1 splitter: 10 gear + 10 RC + 1 red splitter + 80 lube
 * green belt
 *  1 belt: 5 tungsten + 1 blue belt + 20 lube
 *  2 underground: 40 tungsten + 2 blue underground + 40 lube
 *  1 splitter: 15 tungsten + 2 BC + 1 blue splitter + 80 lube
 */
