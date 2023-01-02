export type ModGroup = {
  groupName: string;
  groupNote?: string;
  subGroups: ModSubGroup[];
};

type ModSubGroup = {
  name: string;
  mods: string[];
  notes?: Record<string, string>;
};

// https://discord.com/channels/139677590393716737/231518135231053825/1021919222609219614
const MODS_QOL: ModGroup = {
  groupName: 'Useful Quality-of-Life mods',
  subGroups: [
    {
      name: 'Information/Helper',
      mods: [
        'Editor Extensions',
        'Factory Planner',
        'Recipe Book',
        'Blueprint Tools',
        'Belt Visualizer',
        'Pipe Visualizer',
        'Factory Search',
        'Bottleneck Lite',
        'Milestones',
        'Assembly Analyst',
        'Rate Calculator',
        'Solar Calculator',
        'Ghost Warnings',
        'Show Max Underground Distance',
        'Ghost Counter',
        'Quick Item Search',
        'Stats GUI',
        'Task List',
        'Extended Descriptions',
        'GUI Unifyer',
        'Color-Coded Planners',
        'Better Alert Arrows',
      ],
      notes: {
        'Editor Extensions': 'For sandboxing',
        'Factory Planner': 'For planning',
        'Rate Calculator': 'For designing',
        'Bottleneck Lite': 'For monitoring',
        'Assembly Analyst': 'For verifying',
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
        'Copy Paste Modules',
        'Area Paste',
        'Simple Landfill Mining',
        'Picker Dollies',
        'Even Distribution',
        'Auto Deconstruct',
        'Spidertron Enhancements',
        'Automatic Train Painter',
        'Automatic Station Painter',
        'Trains Switch to Manual at Temporary Stops',
        'Auto Trash',
        'Automatic Underground Pipe Connectors',
        'VehicleSnap',
        'Redo',
      ],
    },
    {
      name: 'Small gameplay additions',
      mods: [
        'Train Groups',
        'Train Control Signals',
        'Repair Turret',
        'Larger Lamps',
        'Text Plates',
        'Industrial Display Plates',
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
      ],
      notes: {
        Helmod: 'Alternatively use Factory Planner for better UI',
        FNEI: 'Alternatively use Recipe Book for better UI',
        EvoGUI: 'Alternatively use Stats GUI for better UI',
        Bottleneck: 'Alternatively use Bottleneck Lite for better performance',
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
      ],
      notes: {
        Clockwork: 'not compatible with SE',
      },
    },
  ],
};

// https://discord.com/channels/139677590393716737/231518135231053825/1042636429236375573
const MODS_MID: ModGroup = {
  groupName: 'Mid-size mod suggestions',
  groupNote:
    "Mods that add 'things', are mostly compatible with each other and with many overhauls",
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
      notes: {
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
        'Renai Transportation/Lob',
        'Flow Control',
        'Fluid Most Flow',
        'SE Space Trains',
        'X-Logistics',
      ],
      notes: {
        'Cargo Ships': 'Underwater Pipes',
      },
    },
    {
      name: 'Train management',
      mods: [
        'LTN - Logistic Train Network',
        'LTN Manager',
        'LTN Combinator Modernized',
        'Project Cybersyn',
        'Rail Logistics Dispatcher',
      ],
      notes: {
        'LTN - Logistic Train Network':
          'LTN Manager + LTN Combinator Modernized',
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
      notes: {
        'Realistic Fusion Power':
          'Not compatible with Nuclear Fuel, Plutonium Energy',
        'Nuclear Fuel':
          'Not compatible with Plutonium Energy, Realistic Fusion Power',
        'Plutonium Energy':
          'Not compatible with Nuclear Fuel, Realistic Fusion Power',
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
      notes: {
        Rampant: 'Not necessarily compatible with other enemy mods',
        'Rampant fixed': 'Not necessarily compatible with other enemy mods',
        'Rampant Evolution': 'Not necessarily compatible with other enemy mods',
        'Armoured Biters': 'Not necessarily compatible with other enemy mods',
        'Frost Biters': 'Not necessarily compatible with other enemy mods',
        'Explosive Biters': 'Not necessarily compatible with other enemy mods',
        Arachnids: 'Not necessarily compatible with other enemy mods',
      },
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
  groupName: 'Overhaul mods',
  groupNote:
    'All of these require starting a new game. In rough order of complexity.',
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
      notes: {
        'Very BZ':
          "A collection of ore mods. Add/remove them to get desired complexity. Can be played on their own or with many of the 'Small' overhauls, and Space Exploration. https://brevven.github.io/bz/",
        '248k':
          "Has 2 modes, Standalone (doesn't change any vanilla items) and Overhaul (fully integrates everything into vanilla/K2 progression).",
        'Krastorio 2':
          '(K2) Great first overhaul. New toys. Optionally add Extended Endgame.',
        'K2 + 248k': '',
        Warptorio2:
          '(+ Expansion) Very different gameplay to normal. Particularly great in multiplayer.',
        'Mining Space Industries II': '',
        "Angel's": '(without Industries)',
      },
    },
    {
      name: 'Medium',
      mods: [
        'Industrial Revolution 3',
        "Angel's",
        "Bob's + Angel's",
        "BA + MadClown01's and/or Youki",
        'Sea Block',
      ],
      notes: {
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
      mods: ['Nullius', 'Space Exploration', 'SE + K2', 'Medium Py'],
      notes: {
        Nullius:
          "Well thought-out game design. Lots of fluids and byproducts. Uses Angel's graphics.",
        'Space Exploration':
          '(SE) Explore other planets. Large focus on inter-planetary logistics.',
        'SE + K2':
          'Slower start than SE, but more toys to play with much later on.',
        'Medium Py':
          'All Pyanodons mods except AlienLife and Alternative Energy.',
      },
    },
    {
      name: 'Pyanodons',
      mods: ['Full Py'],
      notes: {
        'Full Py': 'Extremely hard (>1000 hours).',
      },
    },
  ],
};

export const MOD_LIST: ModGroup[] = [MODS_QOL, MODS_MID, MODS_OVERHAUL];
