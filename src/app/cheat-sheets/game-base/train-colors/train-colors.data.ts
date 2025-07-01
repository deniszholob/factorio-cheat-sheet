import { RawData } from 'app/models/Data.model';
import { TrainColorsData } from 'app/models/TrainColorsData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const TRAIN_COLOR_DATA: RawData<TrainColorsData> = {
  cheatSheet: {
    title: 'Train Colors',
    iconId: FactorioIcons.Icons_TrainStop,
  },
  data: {
    blueprint:
      'https://raw.githubusercontent.com/deniszholob/factorio-blueprints/master/blueprint-data/bp-train-station-colors.txt',
    trainColors: [
      {
        icon: FactorioIcons.Icons_IronOre,
        rgb: [0, 140, 255],
        type: 'Iron ore',
      },
      {
        icon: FactorioIcons.Icons_CopperOre,
        rgb: [255, 55, 0],
        type: 'Copper ore',
      },
      {
        icon: FactorioIcons.Icons_Coal,
        rgb: [0, 0, 0],
        type: 'Coal',
      },
      {
        icon: FactorioIcons.Icons_Stone,
        rgb: [150, 100, 80],
        type: 'Stone',
      },
      {
        icon: FactorioIcons.Icons_UraniumOre,
        rgb: [100, 180, 0],
        type: 'Uranium ore',
      },
      {
        icon: FactorioIcons.Icons_IronPlate,
        rgb: [180, 200, 255],
        type: 'Iron plate',
      },
      {
        icon: FactorioIcons.Icons_CopperPlate,
        rgb: [255, 125, 85],
        type: 'Copper plate',
      },
      {
        icon: FactorioIcons.Icons_SteelPlate,
        rgb: [255, 200, 180],
        type: 'Steel plate',
      },
      {
        icon: FactorioIcons.Icons_IronGearWheel,
        rgb: [150, 150, 150],
        type: 'Gears',
      },
      {
        icon: FactorioIcons.Icons_Uranium238,
        rgb: [40, 100, 50],
        type: 'Uranium',
      },
      {
        icon: FactorioIcons.Icons_ElectronicCircuit,
        rgb: [0, 255, 0],
        type: 'Electronic circuit',
      },
      {
        icon: FactorioIcons.Icons_AdvancedCircuit,
        rgb: [255, 0, 0],
        type: 'Advanced circuit',
      },
      {
        icon: FactorioIcons.Icons_ProcessingUnit,
        rgb: [0, 0, 255],
        type: 'Processing circuit',
      },
      {
        icon: FactorioIcons.Fluid_CrudeOil,
        rgb: [0, 0, 30],
        type: 'Crude oil',
      },
      {
        icon: FactorioIcons.Fluid_Lubricant,
        rgb: [0, 170, 0],
        type: 'Lubricant',
      },
      {
        icon: FactorioIcons.Fluid_SulfuricAcid,
        rgb: [255, 255, 0],
        type: 'Sulfuric acid',
      },
      {
        icon: FactorioIcons.Icons_PlasticBar,
        rgb: [255, 255, 255],
        type: 'Plastic bar',
      },
      {
        icon: FactorioIcons.Icons_Explosives,
        rgb: [165, 60, 15],
        type: 'Explosives',
      },
      {
        icon: FactorioIcons.Icons_AutomationSciencePack,
        rgb: [255, 50, 50],
        type: 'Red science',
      },
      {
        icon: FactorioIcons.Icons_LogisticSciencePack,
        rgb: [100, 255, 100],
        type: 'Green science',
      },
      {
        icon: FactorioIcons.Icons_ChemicalSciencePack,
        rgb: [80, 180, 255],
        type: 'Blue science',
      },
      {
        icon: FactorioIcons.Icons_MilitarySciencePack,
        rgb: [50, 50, 50],
        type: 'Grey science',
      },
      {
        icon: FactorioIcons.Icons_ProductionSciencePack,
        rgb: [255, 80, 255],
        type: 'Purple science',
      },
      {
        icon: FactorioIcons.Icons_UtilitySciencePack,
        rgb: [255, 180, 80],
        type: 'Yellow science',
      },
      {
        icon: FactorioIcons.Icons_SpaceSciencePack,
        rgb: [200, 200, 200],
        type: 'Space science',
      },
      {
        icon: FactorioIcons.Icons_SolarPanel,
        rgb: [0, 100, 150],
        type: 'Solar panel',
      },
      {
        icon: FactorioIcons.Icons_RocketPart,
        rgb: [255, 0, 100],
        type: 'Rocket supply',
      },
      {
        icon: FactorioIcons.Icons_PowerArmor,
        rgb: [255, 0, 255],
        type: 'PAX shuttle',
      },
      {
        icon: FactorioIcons.Icons_RepairPack,
        rgb: [0, 255, 255],
        type: 'Supply/Trash/etc.',
      },
    ],
    trainColorsGenerated: [
      {
        icon: FactorioIcons.Icons_Accumulator,
        rgb: [109, 159, 163],
        type: 'Accumulator',
      },
      {
        icon: FactorioIcons.Icons_AdvancedCircuit,
        rgb: [154, 43, 20],
        type: 'Advanced Circuit',
      },
      {
        icon: FactorioIcons.Icons_AutomationSciencePack,
        rgb: [144, 67, 71],
        type: 'Red science',
      },
      {
        icon: FactorioIcons.Icons_Battery,
        rgb: [144, 67, 71],
        type: 'Battery',
      },
      {
        icon: FactorioIcons.Icons_ChemicalSciencePack,
        rgb: [74, 130, 151],
        type: 'Blue science',
      },
      {
        icon: FactorioIcons.Icons_Coal,
        rgb: [28, 24, 29],
        type: 'Coal',
      },
      {
        icon: FactorioIcons.Icons_Concrete,
        rgb: [130, 140, 151],
        type: 'Concrete',
      },
      {
        icon: FactorioIcons.Icons_CopperCable,
        rgb: [127, 65, 47],
        type: 'Copper cable',
      },
      {
        icon: FactorioIcons.Icons_CopperOre,
        rgb: [138, 63, 33],
        type: 'Copper ore',
      },
      {
        icon: FactorioIcons.Icons_CopperPlate,
        rgb: [120, 58, 45],
        type: 'Copper plate',
      },
      {
        icon: FactorioIcons.Fluid_CrudeOil,
        rgb: [0, 0, 18],
        type: 'Crude oil',
      },
      {
        icon: FactorioIcons.Icons_ElectricEngineUnit,
        rgb: [109, 76, 79],
        type: 'Electric engine unit',
      },
      {
        icon: FactorioIcons.Icons_ElectricFurnace,
        rgb: [92, 82, 83],
        type: 'Electric furnace',
      },
      {
        icon: FactorioIcons.Icons_ElectronicCircuit,
        rgb: [73, 123, 21],
        type: 'Electronic circuit',
      },
      {
        icon: FactorioIcons.Barreling_BarrelEmpty,
        rgb: [118, 122, 127],
        type: 'Empty barrel',
      },
      {
        icon: FactorioIcons.Icons_EngineUnit,
        rgb: [86, 73, 57],
        type: 'Engine unit',
      },
      {
        icon: FactorioIcons.Icons_ExplosiveCannonShell,
        rgb: [56, 26, 17],
        type: 'Explosive cannon shell',
      },
      {
        icon: FactorioIcons.Icons_Explosives,
        rgb: [88, 34, 30],
        type: 'Explosives',
      },
      {
        icon: FactorioIcons.Icons_FirearmMagazine,
        rgb: [54, 49, 34],
        type: 'Firearm magazine',
      },
      {
        icon: FactorioIcons.Icons_FlyingRobotFrame,
        rgb: [95, 99, 101],
        type: 'Flying robot frame',
      },
      {
        icon: FactorioIcons.Icons_Grenade,
        rgb: [73, 80, 64],
        type: 'Grenade',
      },
      {
        icon: FactorioIcons.Fluid_HeavyOil,
        rgb: [202, 45, 6],
        type: 'Heavy oil',
      },
      {
        icon: FactorioIcons.Icons_Inserter,
        rgb: [84, 58, 28],
        type: 'Inserter',
      },
      {
        icon: FactorioIcons.Icons_IronGearWheel,
        rgb: [92, 95, 96],
        type: 'Gears',
      },
      {
        icon: FactorioIcons.Icons_IronOre,
        rgb: [61, 91, 114],
        type: 'Iron ore',
      },
      {
        icon: FactorioIcons.Icons_IronPlate,
        rgb: [165, 169, 172],
        type: 'Iron plate',
      },
      {
        icon: FactorioIcons.Icons_IronStick,
        rgb: [145, 150, 157],
        type: 'Iron stick',
      },
      {
        icon: FactorioIcons.Fluid_LightOil,
        rgb: [235, 140, 0],
        type: 'Light oil',
      },
      {
        icon: FactorioIcons.Icons_LogisticSciencePack,
        rgb: [79, 148, 84],
        type: 'Green science',
      },
      {
        icon: FactorioIcons.Icons_LowDensityStructure,
        rgb: [100, 79, 57],
        type: 'Low density structure',
      },
      {
        icon: FactorioIcons.Fluid_Lubricant,
        rgb: [62, 145, 20],
        type: 'Lubricant',
      },
      {
        icon: FactorioIcons.Icons_MilitarySciencePack,
        rgb: [129, 130, 151],
        type: 'Grey science',
      },
      {
        icon: FactorioIcons.Icons_NuclearFuel,
        rgb: [49, 82, 40],
        type: 'Nuclear fuel',
      },
      {
        icon: FactorioIcons.Fluid_PetroleumGas,
        rgb: [135, 70, 141],
        type: 'Petroleum gas',
      },
      {
        icon: FactorioIcons.Icons_PiercingRoundsMagazine,
        rgb: [58, 25, 28],
        type: 'Piercing rounds magazine',
      },
      {
        icon: FactorioIcons.Icons_Pipe,
        rgb: [71, 57, 40],
        type: 'Pipe',
      },
      {
        icon: FactorioIcons.Icons_PlasticBar,
        rgb: [252, 255, 255],
        type: 'Plastic bar',
      },
      {
        icon: FactorioIcons.Icons_ProcessingUnit,
        rgb: [68, 81, 164],
        type: 'Processing unit',
      },
      {
        icon: FactorioIcons.Icons_ProductionSciencePack,
        rgb: [114, 60, 143],
        type: 'Purple science',
      },
      {
        icon: FactorioIcons.Icons_ProductivityModule,
        rgb: [144, 83, 52],
        type: 'Productivity module',
      },
      {
        icon: FactorioIcons.Icons_Radar,
        rgb: [119, 108, 86],
        type: 'Radar',
      },
      {
        icon: FactorioIcons.Icons_Rail,
        rgb: [110, 94, 70],
        type: 'Rail',
      },
      // Deprecated https://wiki.factorio.com/Archive:Rocket_control_unit
      // {
      //   icon: FactorioIcons.RocketControlUnit,
      //   rgb: [131, 154, 121],
      // },
      {
        icon: FactorioIcons.Icons_RocketFuel,
        rgb: [69, 58, 45],
        type: 'Rocket fuel',
      },
      {
        icon: FactorioIcons.Icons_Satellite,
        rgb: [157, 151, 166],
        type: 'Satellite',
      },
      {
        icon: FactorioIcons.Icons_SolarPanel,
        rgb: [71, 128, 148],
        type: 'Solar panel',
      },
      {
        icon: FactorioIcons.Icons_SolidFuel,
        rgb: [70, 70, 83],
        type: 'Solid fuel',
      },
      {
        icon: FactorioIcons.Icons_SpaceSciencePack,
        rgb: [239, 239, 237],
        type: 'Space science',
      },
      {
        icon: FactorioIcons.Icons_SpeedModule,
        rgb: [64, 114, 140],
        type: 'Speed module',
      },
      {
        icon: FactorioIcons.Icons_SteelPlate,
        rgb: [161, 165, 161],
        type: 'Steel plate',
      },
      {
        icon: FactorioIcons.Icons_Stone,
        rgb: [105, 82, 49],
        type: 'Stone',
      },
      {
        icon: FactorioIcons.Icons_StoneBrick,
        rgb: [121, 124, 122],
        type: 'Stone brick',
      },
      {
        icon: FactorioIcons.Icons_Sulfur,
        rgb: [102, 92, 5],
        type: 'Sulfur',
      },
      {
        icon: FactorioIcons.Fluid_SulfuricAcid,
        rgb: [254, 255, 10],
        type: 'Sulfuric acid',
      },
      {
        icon: FactorioIcons.Icons_TransportBelt,
        rgb: [170, 126, 103],
        type: 'Yellow belt',
      },
      {
        icon: FactorioIcons.Icons_Uranium235,
        rgb: [48, 190, 10],
        type: 'Uranium 235',
      },
      {
        icon: FactorioIcons.Icons_Uranium238,
        rgb: [13, 52, 21],
        type: 'Uranium 238',
      },
      {
        icon: FactorioIcons.Icons_UraniumFuelCell,
        rgb: [49, 110, 48],
        type: 'Uranium fuel cell',
      },
      {
        icon: FactorioIcons.Icons_UraniumOre,
        rgb: [49, 98, 9],
        type: 'Uranium ore',
      },
      {
        icon: FactorioIcons.Icons_UtilitySciencePack,
        rgb: [151, 128, 81],
        type: 'Yellow science',
      },
      {
        icon: FactorioIcons.Icons_Wall,
        rgb: [98, 80, 57],
        type: 'Wall',
      },
      {
        icon: FactorioIcons.Fluid_Water,
        rgb: [34, 138, 215],
        type: 'Water',
      },
      {
        icon: FactorioIcons.Icons_Wood,
        rgb: [84, 44, 12],
        type: 'Wood',
      },
    ],
  },
};
