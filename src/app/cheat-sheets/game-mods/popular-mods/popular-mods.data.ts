import type { Link } from 'app/models/LinksData.model';

export type ModGroup = {
  name: string;
  note?: string;
  subGroups: ModSubGroup[];
};

type ModSubGroup = {
  name: string;
  mods: Link[];
  note?: string;
};

const MOD_PREFIX = 'https://mods.factorio.com/mod';

function modSearchLink(modName: string): string {
  return `https://mods.factorio.com/?query=${modName}`;
}

// https://discord.com/channels/139677590393716737/231518135231053825/1021919222609219614
const MODS_QOL: ModGroup = {
  name: 'Useful Quality-of-Life mods',
  subGroups: [
    {
      name: 'Information/Helper',
      note: 'All of these can be added and removed at any time during a game (except RSO). ^ = Less Essential. ',
      mods: [
        {
          text: 'Editor Extensions',
          url: `${MOD_PREFIX}/EditorExtensions`,
          caption: 'For sandboxing',
        },
        {
          text: 'Factory Planner',
          url: `${MOD_PREFIX}/factoryplanner`,
          caption: 'For planning',
        },
        { text: 'Recipe Book', url: `${MOD_PREFIX}/RecipeBook` },
        { text: 'Blueprint Tools', url: `${MOD_PREFIX}/BlueprintTools` },
        { text: 'Belt Visualizer', url: `${MOD_PREFIX}/belt-visualizer` },
        {
          text: 'Pipe Visualizer (1.1 ONLY)',
          url: `${MOD_PREFIX}/PipeVisualizer`,
        },
        { text: 'Factory Search', url: `${MOD_PREFIX}/FactorySearch` },
        {
          text: 'Bottleneck Lite ^',
          url: `${MOD_PREFIX}/BottleneckLite`,
          caption: 'For monitoring',
        },
        { text: 'Milestones ^', url: `${MOD_PREFIX}/Milestones` },
        {
          text: 'Assembly Analyst ^',
          url: `${MOD_PREFIX}/assemblyanalyst`,
          caption: 'For verifying',
        },
        {
          text: 'Rate Calculator ^',
          url: `${MOD_PREFIX}/RateCalculator`,
          caption: 'For designing',
        },
        { text: 'Solar Calculator ^', url: `${MOD_PREFIX}/solar-calc` },
        { text: 'Ghost Warnings ^', url: `${MOD_PREFIX}/GhostWarnings` },
        {
          text: 'Show Max Underground Distance ^',
          url: `${MOD_PREFIX}/show-max-underground-distance`,
        },
        { text: 'Ghost Counter ^', url: `${MOD_PREFIX}/ghost-counter` },
        { text: 'Quick Item Search ^', url: `${MOD_PREFIX}/QuickItemSearch` },
        { text: 'Stats GUI ^', url: `${MOD_PREFIX}/StatsGui` },
        { text: 'Task List ^', url: `${MOD_PREFIX}/TaskList` },
        {
          text: 'Extended Descriptions ^',
          url: `${MOD_PREFIX}/extended-descriptions`,
        },
        { text: 'GUI Unifyer ^', url: `${MOD_PREFIX}/GUI_Unifyer` },
        {
          text: 'Color-Coded Planners ^',
          url: `${MOD_PREFIX}/ColorCodedPlanners`,
        },
        {
          text: 'Better Alert Arrows ^',
          url: `${MOD_PREFIX}/BetterAlertArrows`,
        },
        {
          text: 'Automatic Train Deployment',
          url: `${MOD_PREFIX}/AutomaticTrainDeployment_Updated`,
          caption: 'Testing tool',
        },
        {
          text: 'Informatron',
          url: `${MOD_PREFIX}/informatron`,
          caption: 'adds an in-game wiki for mods',
        },
        {
          text: 'Placeables',
          url: `${MOD_PREFIX}/Placeables`,
          caption:
            'everything that is buildable (like Informatron or Factory Planner, it tends to be more useful with mods that add lots of things)',
        },
        {
          text: 'Resource Map Label Marker',
          url: `${MOD_PREFIX}/resourceMarker`,
        },
        {
          text: 'Resource Map Marker',
          url: `${MOD_PREFIX}/sonaxaton-resource-map-markers`,
        },
        {
          text: "Resource Highlighter (Dark's Version)",
          url: `${MOD_PREFIX}/resourcehighlighter-dark`,
          caption:
            " Instead of having permanent labels it's able to just show them on demand for what you're actually looking for.",
        },
        { text: 'Train Log', url: `${MOD_PREFIX}/train-log` },
        {
          text: 'Yarm resource monitor',
          url: `${MOD_PREFIX}/YARM`,
          caption: 'warns you when your patches almost run out',
        },
        {
          text: 'DDD Evolution Indicator',
          url: `${MOD_PREFIX}/ddd-evolution-indicator`,
        },
        {
          text: 'DDD Player List',
          url: `${MOD_PREFIX}/ddd-player-list`,
          caption: 'Mostly for use in multiplayer',
        },
      ],
    },
    {
      name: 'Very minor gameplay changes',
      mods: [
        { text: 'Wire Shortcuts', url: `${MOD_PREFIX}/WireShortcuts` },
        {
          text: 'Cursor Enhancements',
          url: `${MOD_PREFIX}/CursorEnhancements`,
        },
        {
          text: 'Slightly Smarter Pipette',
          url: `${MOD_PREFIX}/slightly_smarter_pipette`,
        },
        {
          text: 'Module Inserter Simplified',
          url: `${MOD_PREFIX}/ModuleInserterSimplified`,
        },
        {
          text: 'Module Inserter Extended',
          url: `${MOD_PREFIX}/ModuleInserterEx`,
        },
        {
          text: 'Remote Configuration',
          url: `${MOD_PREFIX}/RemoteConfiguration`,
        },
        { text: 'Copy Paste Modules ^', url: `${MOD_PREFIX}/CopyPasteModules` },
        { text: 'Area Paste ^', url: `${MOD_PREFIX}/AreaPaste` },
        {
          text: 'Simple Landfill Mining ^',
          url: `${MOD_PREFIX}/simple_landfill_mining`,
        },
        { text: 'Picker Dollies ^', url: `${MOD_PREFIX}/PickerDollies` },
        { text: 'Even Distribution ^', url: `${MOD_PREFIX}/even-distribution` },
        { text: 'Auto Deconstruct ^', url: `${MOD_PREFIX}/AutoDeconstruct` },
        {
          text: 'Spidertron Enhancements ^',
          url: `${MOD_PREFIX}/SpidertronEnhancements`,
        },
        {
          text: 'Automatic Train Painter ^',
          url: `${MOD_PREFIX}/Automatic_Train_Painter`,
        },
        {
          text: 'Automatic Station Painter ^',
          url: `${MOD_PREFIX}/automatic-station-painter`,
        },
        {
          text: 'Trains Switch to Manual at Temporary Stops ^',
          url: `${MOD_PREFIX}/manual-trains-at-temp-stops`,
        },
        { text: 'Auto Trash ^', url: `${MOD_PREFIX}/AutoTrash` },
        {
          text: 'Automatic Underground Pipe Connectors ^',
          url: `${MOD_PREFIX}/automatic-underground-pipe-connectors`,
        },
        { text: 'VehicleSnap ^', url: `${MOD_PREFIX}/VehicleSnap` },
        { text: 'Redo ^', url: `${MOD_PREFIX}/redo` },
        {
          text: 'DDD Floating Health ^',
          url: `${MOD_PREFIX}/ddd-floating-health`,
        },
      ],
    },
    {
      name: 'Small gameplay additions',
      mods: [
        { text: 'Train Groups (1.1 ONLY)', url: `${MOD_PREFIX}/TrainGroups` },
        {
          text: 'Train Control Signals',
          url: `${MOD_PREFIX}/Train_Control_Signals`,
        },
        { text: 'Repair Turret ^', url: `${MOD_PREFIX}/Repair_Turret` },
        { text: 'Larger Lamps ^', url: `${MOD_PREFIX}/DeadlockLargerLamp` },
        { text: 'Text Plates ^', url: `${MOD_PREFIX}/textplates` },
        {
          text: 'Industrial Display Plates ^',
          url: `${MOD_PREFIX}/IndustrialDisplayPlates`,
        },
      ],
    },
    {
      name: 'Popular',
      mods: [
        { text: 'Shortcuts for 2.0', url: `${MOD_PREFIX}/Shortcuts-ick` },
        {
          text: 'Various Picker mods',
          url: modSearchLink('Various Picker mods'),
        },
        { text: 'Squeak Through', url: `${MOD_PREFIX}/Squeak Through` },
        { text: 'Queue to Front', url: `${MOD_PREFIX}/QueueToFrontNG` },
        {
          text: 'Underground Indicators',
          url: `${MOD_PREFIX}/UndergroundIndicators`,
        },
        { text: 'Kruise Kontrol', url: `${MOD_PREFIX}/Kruise_Kontrol` },
        { text: 'Ghost On Water', url: `${MOD_PREFIX}/GhostOnWater` },
        { text: 'RSO', url: `${MOD_PREFIX}/rso-mod` },
        {
          text: 'Helmod',
          url: `${MOD_PREFIX}/helmod`,
          caption: 'Alternatively use Factory Planner for different/modern UI',
        },
        {
          text: 'FNEI',
          url: `${MOD_PREFIX}/FNEI`,
          caption: 'Alternatively use Recipe Book for different/modern UI',
        },
        {
          text: 'EvoGUI',
          url: `${MOD_PREFIX}/EvoGUI`,
          caption:
            'Alternatively use Stats GUI or DDD Evolution Indicator for different/modern UI',
        },
        {
          text: 'Bottleneck',
          url: `${MOD_PREFIX}/Bottleneck`,
          caption: 'Alternatively use Bottleneck Lite for better performance',
        },
        {
          text: 'Big Brother',
          url: `${MOD_PREFIX}/Big_Brother`,
          caption: 'better radars',
        },
        {
          text: 'Electric Furnaces',
          url: `${MOD_PREFIX}/Electric Furnaces`,
          caption: 'Electric versions of both stone and steel furnace',
        },
        {
          text: 'Delete Empty Chunks',
          url: `${MOD_PREFIX}/DeleteEmptyChunks`,
          caption: 'Helpful for reducing save file size',
        },
      ],
    },
    {
      name: 'Aesthetic',
      mods: [
        { text: 'Dectorio', url: `${MOD_PREFIX}/Dectorio` },
        { text: 'Light Overhaul', url: `${MOD_PREFIX}/light-overhaul` },
        { text: 'Dark Nights', url: `${MOD_PREFIX}/dark-nights` },
        { text: 'Light Cone', url: `${MOD_PREFIX}/LightCone` },
        { text: 'Bioluminescence', url: `${MOD_PREFIX}/Bioluminescence` },
        {
          text: 'Clockwork',
          url: `${MOD_PREFIX}/Clockwork`,
          caption: 'not compatible with SE',
        },
        { text: 'Afraid of the Dark', url: `${MOD_PREFIX}/AfraidOfTheDark` },
        { text: 'Inbuilt Lighting', url: `${MOD_PREFIX}/inbuilt_lighting` },
        {
          text: 'Lighted Electric Poles +',
          url: `${MOD_PREFIX}/Lighted-Poles-Plus`,
        },
        { text: 'Pollution Visuals', url: `${MOD_PREFIX}/pollution-visuals` },
        { text: 'Bullet Trails', url: `${MOD_PREFIX}/bullet-trails` },
        {
          text: 'Power Grid Comb',
          url: `${MOD_PREFIX}/power-grid-comb`,
          caption: 'Solution for ugly electric grid in map view.',
        },
      ],
    },
    {
      name: 'Small Additions',
      mods: [
        { text: 'Car Finder', url: `${MOD_PREFIX}/car-finder` },
        {
          text: 'Automatic Logistics chests',
          url: `${MOD_PREFIX}/automatic-logistic-chests`,
        },
        {
          text: 'Schall Tank Woodcutting',
          url: `${MOD_PREFIX}/SchallTankWoodcutting`,
        },
        {
          text: 'Vacuum cleaner',
          url: `${MOD_PREFIX}/vacuum-cleaner`,
          caption:
            'allows you to filter what you pick up with "F" key (great for getting stuff off your bus!)',
        },
      ],
    },
    {
      name: 'Automatic Planners',
      mods: [
        {
          text: 'Mining Patch Planner',
          url: `${MOD_PREFIX}/mining-patch-planne`,
          caption: 'automatically make blueprints for resource patches',
        },
        {
          text: 'Outpost Planner',
          url: `${MOD_PREFIX}/OutpostPlanner`,
          caption: 'automatically make blueprints for resource patches',
        },
        {
          text: 'P.U.M.P.',
          url: `${MOD_PREFIX}/pump`,
          caption: 'same as the above 2, but for Oil Patches',
        },
        {
          text: 'Rail Signal Planner',
          url: `${MOD_PREFIX}/RailSignalPlanner`,
          caption:
            'Automatically places signals at intersections, though it is suggested you double check.',
        },
      ],
    },
  ],
};

// https://discord.com/channels/139677590393716737/231518135231053825/1042636429236375573
const MODS_MID: ModGroup = {
  name: 'Mid-size mod suggestions',
  note: "Mods that add 'things', are mostly compatible with each other and with many overhauls",
  subGroups: [
    {
      name: 'Production',
      mods: [
        {
          text: 'Rocket silo construction',
          url: `${MOD_PREFIX}/Rocket-Silo-Construction`,
        },
        { text: 'Deep core mining', url: `${MOD_PREFIX}/vtk-deep-core-mining` },
        {
          text: 'Extended Vanilla: Ore Refining',
          url: `${MOD_PREFIX}/ev-refining`,
        },
        {
          text: 'Beacon Rebalance',
          url: `${MOD_PREFIX}/wret-beacon-rebalance-mod`,
        },
        {
          text: 'Bio Industries',
          url: `${MOD_PREFIX}/Bio_Industries`,
          caption: 'almost an overhaul',
        },
      ],
    },
    {
      name: 'Logistics',
      mods: [
        { text: 'Transport Drones', url: `${MOD_PREFIX}/Transport_Drones` },
        {
          text: 'Cargo Ships',
          url: `${MOD_PREFIX}/cargo-ships`,
          caption: 'Underwater Pipes',
        },
        {
          text: 'Long range delivery drones',
          url: `${MOD_PREFIX}/Long_Range_Delivery_Drones`,
        },
        { text: 'Spidertron Patrols', url: `${MOD_PREFIX}/SpidertronPatrols` },
        {
          text: 'Spidertron Logistics System',
          url: `${MOD_PREFIX}/spidertron-logistics`,
        },
        { text: 'Bulk Rail Loader', url: `${MOD_PREFIX}/railloader` },
        {
          text: 'Renai Transportation',
          url: `${MOD_PREFIX}/RenaiTransportation`,
          caption: 'Trampolines',
        },
        {
          text: 'Lob',
          url: `${MOD_PREFIX}/lob`,
          caption: 'A fork of Renai Transportation',
        },
        { text: 'Flow Control', url: `${MOD_PREFIX}/Flow Control` },
        { text: 'Fluid Must Flow', url: `${MOD_PREFIX}/FluidMustFlow` },
        {
          text: 'Advanced Fluid Handling',
          url: `${MOD_PREFIX}/underground-pipe-pack`,
          caption: 'Good SE integration',
        },
        { text: 'SE Space Trains', url: `${MOD_PREFIX}/se-space-trains` },
        { text: 'X-Logistics', url: `${MOD_PREFIX}/X-Logistics` },
        { text: 'Vanilla Loaders', url: `${MOD_PREFIX}/vanilla-loaders-hd` },
        { text: 'Loader Redux', url: `${MOD_PREFIX}/LoaderRedux` },
        { text: 'Miniloaders', url: `${MOD_PREFIX}/miniloader` },
        { text: "Anfilt's Belt Utilities", url: `${MOD_PREFIX}/beltutils` },
        {
          text: "Deadlock's Stacking Beltboxes & Compact Loaders",
          url: `${MOD_PREFIX}/deadlock-beltboxes-loaders`,
        },
        { text: 'Equipment Gantry', url: `${MOD_PREFIX}/equipment-gantry` },
      ],
    },
    {
      name: 'Train management',
      note: '(These 3 are all alternatives to each other, pick only one)',
      mods: [
        {
          text: 'LTN - Logistic Train Network',
          url: '',
          caption: 'LTN Manager + LTN Combinator Modernized',
        },
        { text: 'LTN Manager', url: `${MOD_PREFIX}/LtnManager` },
        {
          text: 'LTN Combinator Modernized',
          url: `${MOD_PREFIX}/LTN_Combinator_Modernized`,
        },
        { text: 'Project Cybersyn', url: `${MOD_PREFIX}/cybersyn` },
        {
          text: 'Rail Logistics Dispatcher',
          url: `${MOD_PREFIX}/RailLogisticsDispatcher`,
        },
        {
          text: 'Train Scaling',
          url: `${MOD_PREFIX}/train-scaling`,
          caption: 'For automated train building',
        },
        {
          text: 'Train Construction Site',
          url: `${MOD_PREFIX}/trainConstructionSite`,
          caption: 'For automated train building',
        },
        {
          text: 'Automatic Train fuel stop',
          url: `${MOD_PREFIX}/FuelTrainStop`,
        },
      ],
    },
    {
      name: 'Vehicles',
      mods: [
        { text: 'Hovercrafts', url: `${MOD_PREFIX}/Hovercrafts` },
        {
          text: 'Spidertron Extended',
          url: `${MOD_PREFIX}/spidertron-extended`,
        },
        { text: 'Tarantulator', url: `${MOD_PREFIX}/tarantulator` },
        { text: 'Space Spidertron', url: `${MOD_PREFIX}/space-spidertron` },
        { text: "Lex's Aircraft", url: `${MOD_PREFIX}/lex-aircraft` },
        { text: 'AAI Ironclad', url: `${MOD_PREFIX}/aai-vehicles-ironclad` },
      ],
    },
    {
      name: 'Construction',
      mods: [
        { text: 'Nanobots', url: `${MOD_PREFIX}/Nanobots` },
        { text: 'Companion Drones', url: `${MOD_PREFIX}/Companion_Drones` },
        { text: 'Constructron', url: `${MOD_PREFIX}/Constructron` },
      ],
    },
    {
      name: 'Power',
      mods: [
        {
          text: 'Realistic Fusion Power',
          url: `${MOD_PREFIX}/RealisticFusionPower`,
        },
        {
          text: 'Nuclear Fuel',
          url: `${MOD_PREFIX}/Nuclear Fuel`,
          caption: 'Not compatible with Plutonium Energy',
        },
        {
          text: 'Plutonium Energy',
          url: `${MOD_PREFIX}/PlutoniumEnergy`,
          caption: 'Not compatible with Nuclear Fuel',
        },
        { text: 'Geothermal', url: `${MOD_PREFIX}/Geothermal` },
        { text: 'Biter Power', url: `${MOD_PREFIX}/biter-power` },
        {
          text: 'Power Overload',
          url: `${MOD_PREFIX}/PowerOverload`,
          caption: 'Not compatible with Fluidic Power',
        },
        {
          text: 'Fluidic Power',
          url: `${MOD_PREFIX}/FluidicPower`,
          caption: 'Not compatible with Power Overload',
        },
      ],
    },
    {
      name: 'Weapons',
      mods: [
        { text: 'Rampant Arsenal', url: `${MOD_PREFIX}/RampantArsenal` },
        {
          text: 'Realistic Fusion Weaponry',
          url: `${MOD_PREFIX}/RealisticFusionWeaponry`,
        },
        { text: 'Orbital Ion Cannon', url: `${MOD_PREFIX}/Orbital Ion Cannon` },
        { text: 'M.I.R.V', url: `${MOD_PREFIX}/MIRV` },
        { text: 'Endgame Combat', url: `${MOD_PREFIX}/EndgameCombat` },
      ],
    },
    {
      name: 'Enemies',
      mods: [
        { text: 'Rampant', url: `${MOD_PREFIX}/Rampant` },
        { text: 'Rampant fixed', url: `${MOD_PREFIX}/RampantFixed` },
        { text: 'Rampant Evolution', url: `${MOD_PREFIX}/RampantEvolution` },
        { text: 'Armoured Biters', url: `${MOD_PREFIX}/ArmouredBiters` },
        { text: 'Frost Biters', url: `${MOD_PREFIX}/Cold_biters` },
        { text: 'Explosive Biters', url: `${MOD_PREFIX}/Explosive_biters` },
        { text: 'Arachnids', url: `${MOD_PREFIX}/Arachnids` },
        { text: "Bob's Enemies", url: `${MOD_PREFIX}/bobenemies` },
      ],
      note: 'Not necessarily all compatible with each other',
    },
    {
      name: 'Misc',
      mods: [
        { text: 'Alien Biomes', url: `${MOD_PREFIX}/alien-biomes` },
        {
          text: 'Factorissimo 2 - notnotmelon fork',
          url: `${MOD_PREFIX}/factorissimo2-cheaperFactories-datasone`,
        },
        { text: 'Larger Lamps', url: `${MOD_PREFIX}/DeadlockLargerLamp` },
      ],
    },
  ],
};

// https://discord.com/channels/139677590393716737/231518135231053825/1030256122151567401
const MODS_OVERHAUL: ModGroup = {
  name: 'Overhaul mods',
  note: 'All of these require starting a new game. In rough order of complexity.',
  subGroups: [
    {
      name: 'Small-ish',
      mods: [
        {
          text: 'Very BZ',
          url: `${MOD_PREFIX}/bzvery`,
          caption:
            "A collection of ore mods. Add/remove them to get desired complexity. Can be played on their own or with many of the 'Small' overhauls, and Space Exploration.",
        },
        {
          text: '248k',
          url: `${MOD_PREFIX}/248k`,
          caption:
            "Has 2 modes, Standalone (doesn't change any vanilla items) and Overhaul (fully integrates everything into vanilla/K2 progression).",
        },
        {
          text: 'Krastorio 2',
          url: `${MOD_PREFIX}/Krastorio2`,
          caption:
            '(K2) Great first overhaul. New toys. Optionally add Extended Endgame.',
        },
        { text: 'K2 + 248k', url: '' },
        {
          text: 'Warptorio2',
          url: `${MOD_PREFIX}/warptorio2`,
          caption:
            '(+ Expansion) Very different gameplay to normal. Particularly great in multiplayer.',
        },
        {
          text: 'Mining Space Industries II',
          url: `${MOD_PREFIX}/Mining-Space-Industries-II`,
        },
        { text: 'Yuoki Industries', url: `${MOD_PREFIX}/Yuoki` },
        { text: 'ModMash', url: `${MOD_PREFIX}/modmash` },
        { text: "5Dim's", url: modSearchLink("5Dim's") },
        { text: 'Omni', url: modSearchLink('Omni') },
        { text: "Bob's", url: modSearchLink("Bob's") },
        {
          text: "Angel's",
          url: modSearchLink("Angel's"),
          caption: '(without Industries)',
        },
        { text: "MadClown01's", url: modSearchLink("MadClown01's") },
      ],
    },
    {
      name: 'Medium',
      mods: [
        {
          text: 'Industrial Revolution 3',
          url: modSearchLink('Industrial Revolution 3'),
          caption: '(IR3)',
        },
        {
          text: "Angel's",
          url: modSearchLink("Angel's"),
          caption:
            '(with Industries) Many additions, in particular lots of chemistry. Enable both options for a Large game.',
        },
        {
          text: "Bob's + Angel's",
          url: '',
          caption: ' (BA) Classic modpack.',
        },
        { text: "BA + MadClown01's and/or Yuoki", url: '' },
        {
          text: 'Sea Block',
          url: `${MOD_PREFIX}/SeaBlock`,
          caption:
            "Start on a tiny island and extract all resources from the sea. Includes Bob's + Angel's, and some other mods.",
        },
      ],
    },
    {
      name: 'Large',
      mods: [
        {
          text: 'Nullius',
          url: `${MOD_PREFIX}/nullius`,
          caption:
            "Well thought-out game design. Lots of fluids and byproducts. Uses Angel's graphics.",
        },
        {
          text: 'Space Exploration',
          url: `${MOD_PREFIX}/space-exploration`,
          caption:
            '(SE) Explore other planets. Large focus on inter-planetary logistics.',
        },
        {
          text: 'SE + K2',
          url: '',
          caption:
            'Slower start than SE, but more toys to play with much later on.',
        },
        {
          text: 'Pyanodons',
          url: modSearchLink('Pyanodons'),
          caption:
            'Medium Py (All Pyanodons mods except AlienLife and Alternative Energy).',
        },
      ],
    },
    {
      name: 'XL',
      mods: [
        {
          text: 'Pyanodons',
          url: modSearchLink('Pyanodons'),
          caption: 'Full Py, Extremely hard (>1000 hours).',
        },
      ],
    },
  ],
};

export const MOD_LIST: ModGroup[] = [MODS_QOL, MODS_MID, MODS_OVERHAUL];
