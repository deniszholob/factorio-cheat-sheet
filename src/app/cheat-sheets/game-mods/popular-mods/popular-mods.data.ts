export type ModGroup = {
  name: string;
  note?: string;
  subGroups: ModSubGroup[];
};

type ModSubGroup = {
  name: string;
  mods: string[];
  note?: string;
  modNotes?: Record<string, string>;
};

// https://discord.com/channels/139677590393716737/231518135231053825/1021919222609219614
const MODS_QOL: ModGroup = {
  name: 'Useful Quality-of-Life mods',
  subGroups: [
    {
      name: 'Information/Helper',
      note: 'All of these can be added and removed at any time during a game (except RSO). ^ = Less Essential. ',
      mods: [
        'Editor Extensions',
        'Factory Planner',
        'Recipe Book',
        'Blueprint Tools',
        'Belt Visualizer',
        'Pipe Visualizer',
        'Factory Search',
        'Bottleneck Lite ^',
        'Milestones ^',
        'Assembly Analyst ^',
        'Rate Calculator ^',
        'Solar Calculator ^',
        'Ghost Warnings ^',
        'Show Max Underground Distance ^',
        'Ghost Counter ^',
        'Quick Item Search ^',
        'Stats GUI ^',
        'Task List ^',
        'Extended Descriptions ^',
        'GUI Unifyer ^',
        'Color-Coded Planners ^',
        'Better Alert Arrows ^',
        'Automatic Train Deployment',
        'Informatron',
        'Placeables',
        'Resource Map Label Marker',
        'Resource Map Marker',
        "Resource Highlighter (Dark's Version)",
        'Train Log',
        'Yarm resource monitor',
        'DDD Evolution Indicator',
        'DDD Player List',
      ],
      modNotes: {
        'Editor Extensions': 'For sandboxing',
        'Factory Planner': 'For planning',
        'Rate Calculator ^': 'For designing',
        'Bottleneck Lite ^': 'For monitoring',
        'Assembly Analyst ^': 'For verifying',
        'Automatic Train Deployment': 'Testing tool',
        Informatron: 'adds an in-game wiki for mods',
        Placeables:
          'everything that is buildable (like Informatron or Factory Planner, it tends to be more useful with mods that add lots of things)',
        'Yarm resource monitor': 'warns you when your patches almost run out',
        "Resource Highlighter (Dark's Version)":
          " Instead of having permanent labels it's able to just show them on demand for what you're actually looking for.",
        'DDD Player List': 'Mostly for use in multiplayer',
      },
    },
    {
      name: 'Very minor gameplay changes',
      mods: [
        'Wire Shortcuts',
        'Cursor Enhancements',
        'Slightly Smarter Pipette',
        'Module Inserter Simplified',
        'Module Inserter Extended',
        'Remote Configuration',
        'Copy Paste Modules ^',
        'Area Paste ^',
        'Simple Landfill Mining ^',
        'Picker Dollies ^',
        'Even Distribution ^',
        'Auto Deconstruct ^',
        'Spidertron Enhancements ^',
        'Automatic Train Painter ^',
        'Automatic Station Painter ^',
        'Trains Switch to Manual at Temporary Stops ^',
        'Auto Trash ^',
        'Automatic Underground Pipe Connectors ^',
        'VehicleSnap ^',
        'Redo ^',
        'DDD Floating Health ^',
      ],
    },
    {
      name: 'Small gameplay additions',
      mods: [
        'Train Groups',
        'Train Control Signals',
        'Repair Turret ^',
        'Larger Lamps ^',
        'Text Plates ^',
        'Industrial Display Plates ^',
      ],
    },
    {
      name: 'Popular',
      mods: [
        'Shortcuts for 1.1',
        'Various Picker mods',
        'Squeak Through',
        'Queue to Front',
        'Underground Indicators',
        'Kruise Kontrol',
        'Ghost On Water',
        'RSO',
        'Helmod',
        'FNEI',
        'EvoGUI',
        'Bottleneck',
        'Big Brother',
        'Electric Furnaces',
        'Delete Empty Chunks',
      ],
      modNotes: {
        Helmod: 'Alternatively use Factory Planner for different/modern UI',
        FNEI: 'Alternatively use Recipe Book for different/modern UI',
        EvoGUI:
          'Alternatively use Stats GUI or DDD Evolution Indicator for different/modern UI',
        Bottleneck: 'Alternatively use Bottleneck Lite for better performance',
        'Big Brother': 'better radars',
        'Electric Furnaces':
          'Electric versions of both stone and steel furnace',
        'Delete Empty Chunks': 'Helpful for reducing save file size',
      },
    },
    {
      name: 'Aesthetic',
      mods: [
        'Dectorio',
        'Light Overhaul',
        'Dark Nights',
        'Light Cone',
        'Bioluminescence',
        'Clockwork',
        'Afraid of the Dark',
        'Inbuilt Lighting',
        'Lighted Electric Poles +',
        'Pollution Visuals',
        'Bullet Trails',
        'Power Grid Comb',
      ],
      modNotes: {
        Clockwork: 'not compatible with SE',
        'Power Grid Comb': 'Solution for ugly electric grid in map view.',
      },
    },
    {
      name: 'Small Additions',
      mods: [
        'Car Finder',
        'Automatic Logistics chests',
        'Schall Tank Woodcutting',
        'Vacuum cleaner',
      ],
      modNotes: {
        'Vacuum cleaner':
          'allows you to filter what you pick up with "F" key (great for getting stuff off your bus!)',
      },
    },
    {
      name: 'Automatic Planners',
      mods: [
        'Mining Patch Planner',
        'Outpost Planner',
        'P.U.M.P.',
        'Rail Signal Planner',
      ],
      modNotes: {
        'Mining Patch Planner':
          'automatically make blueprints for resource patches',
        'Outpost Planner': 'automatically make blueprints for resource patches',
        'P.U.M.P.': 'same as the above 2, but for Oil Patches',
        'Rail Signal Planner':
          'Automatically places signals at intersections, though it is suggested you double check.',
      },
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
        'Rocket silo construction',
        'Deep core mining',
        'Extended Vanilla: Ore Refining',
        'Beacon Rebalance',
        'Bio Industries',
      ],
      modNotes: {
        'Bio Industries': 'almost an overhaul',
      },
    },
    {
      name: 'Logistics',
      mods: [
        'Transport Drones',
        'Cargo Ships',
        'Long range delivery drones',
        'Spidertron Patrols',
        'Spidertron Logistics System',
        'Bulk Rail Loader',
        'Renai Transportation',
        'Lob',
        'Flow Control',
        'Fluid Must Flow',
        'Advanced Fluid Handling',
        'SE Space Trains',
        'X-Logistics',
        'Vanilla Loaders',
        'Loader Redux',
        'Miniloaders',
        "Anfilt's Belt Utilities",
        "Deadlock's Stacking Beltboxes & Compact Loaders",
        'Equipment Gantry',
      ],
      modNotes: {
        'Cargo Ships': 'Underwater Pipes',
        'Advanced Fluid Handling': 'Good SE integration',
        'Renai Transportation': 'Trampolines',
        Lob: 'A fork of Renai Transportation',
      },
    },
    {
      name: 'Train management',
      note: '(These 3 are all alternatives to each other, pick only one)',
      mods: [
        'LTN - Logistic Train Network',
        'LTN Manager',
        'LTN Combinator Modernized',
        'Project Cybersyn',
        'Rail Logistics Dispatcher',
        'Train Scaling',
        'Train Construction Site',
        'Automatic Train fuel stop',
      ],
      modNotes: {
        'LTN - Logistic Train Network':
          'LTN Manager + LTN Combinator Modernized',
        'Train Scaling': 'For automated train building',
        'Train Construction Site': 'For automated train building',
      },
    },
    {
      name: 'Vehicles',
      mods: [
        'Hovercrafts',
        'Spidertron Extended',
        'Tarantulator',
        'Space Spidertron',
        "Lex's Aircraft",
        'AAI Ironclad',
      ],
    },
    {
      name: 'Construction',
      mods: ['Nanobots', 'Companion Drones', 'Constructron'],
    },
    {
      name: 'Power',
      mods: [
        'Realistic Fusion Power',
        'Nuclear Fuel',
        'Plutonium Energy',
        'Geothermal',
        'Biter Power',
        'Power Overload',
        'Fluidic Power',
      ],
      modNotes: {
        'Nuclear Fuel': 'Not compatible with Plutonium Energy',
        'Plutonium Energy': 'Not compatible with Nuclear Fuel',
        'Power Overload': 'Not compatible with Fluidic Power',
        'Fluidic Power': 'Not compatible with Power Overload',
      },
    },
    {
      name: 'Weapons',
      mods: [
        'Rampant Arsenal',
        'Realistic Fusion Weaponry',
        'Orbital Ion Cannon',
        'M.I.R.V',
        'Endgame Combat',
      ],
    },
    {
      name: 'Enemies',
      mods: [
        'Rampant',
        'Rampant fixed',
        'Rampant Evolution',
        'Armoured Biters',
        'Frost Biters',
        'Explosive Biters',
        'Arachnids',
        "Bob's Enemies",
      ],
      note: 'Not necessarily all compatible with each other',
      // modNotes: {
      //   Rampant: 'Not necessarily compatible with other enemy mods',
      //   'Rampant fixed': 'Not necessarily compatible with other enemy mods',
      //   'Rampant Evolution': 'Not necessarily compatible with other enemy mods',
      //   'Armoured Biters': 'Not necessarily compatible with other enemy mods',
      //   'Frost Biters': 'Not necessarily compatible with other enemy mods',
      //   'Explosive Biters': 'Not necessarily compatible with other enemy mods',
      //   Arachnids: 'Not necessarily compatible with other enemy mods',
      // },
    },
    {
      name: 'Misc',
      mods: [
        'Alien Biomes',
        'Factorissimo 2 - notnotmelon fork',
        'Larger Lamps',
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
        'Very BZ',
        '248k',
        'Krastorio 2',
        'K2 + 248k',
        'Warptorio2',
        'Mining Space Industries II',
        'Yuoki Industries',
        'ModMash',
        "5Dim's",
        'Omni',
        "Bob's",
        "Angel's",
        "MadClown01's",
      ],
      modNotes: {
        'Very BZ':
          "A collection of ore mods. Add/remove them to get desired complexity. Can be played on their own or with many of the 'Small' overhauls, and Space Exploration.",
        '248k':
          "Has 2 modes, Standalone (doesn't change any vanilla items) and Overhaul (fully integrates everything into vanilla/K2 progression).",
        'Krastorio 2':
          '(K2) Great first overhaul. New toys. Optionally add Extended Endgame.',
        Warptorio2:
          '(+ Expansion) Very different gameplay to normal. Particularly great in multiplayer.',
        "Angel's": '(without Industries)',
      },
    },
    {
      name: 'Medium',
      mods: [
        'Industrial Revolution 3',
        "Angel's",
        "Bob's + Angel's",
        "BA + MadClown01's and/or Yuoki",
        'Sea Block',
      ],
      modNotes: {
        'Industrial Revolution 3': '(IR3)',
        "Angel's":
          '(with Industries) Many additions, in particular lots of chemistry. Enable both options for a Large game.',
        "Bob's + Angel's": ' (BA) Classic modpack.',
        'Sea Block':
          "Start on a tiny island and extract all resources from the sea. Includes Bob's + Angel's, and some other mods.",
      },
    },
    {
      name: 'Large',
      mods: ['Nullius', 'Space Exploration', 'SE + K2', 'Pyanodons'],
      modNotes: {
        Nullius:
          "Well thought-out game design. Lots of fluids and byproducts. Uses Angel's graphics.",
        'Space Exploration':
          '(SE) Explore other planets. Large focus on inter-planetary logistics.',
        'SE + K2':
          'Slower start than SE, but more toys to play with much later on.',
        Pyanodons:
          'Medium Py (All Pyanodons mods except AlienLife and Alternative Energy).',
      },
    },
    {
      name: 'XL',
      mods: ['Pyanodons'],
      modNotes: {
        Pyanodons: 'Full Py, Extremely hard (>1000 hours).',
      },
    },
  ],
};

export const MOD_LIST: ModGroup[] = [MODS_QOL, MODS_MID, MODS_OVERHAUL];
