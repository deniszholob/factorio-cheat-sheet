import { RawData } from 'app/models/Data.model';
import { LinksData } from 'app/models/LinksData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const LINKS_DATA: RawData<LinksData> = {
  cheatSheet: {
    title: 'Links',
    iconId: FactorioIcons.Icons_CopperCable,
  },
  data: {
    mainLinks: [
      {
        text: 'Official',
        links: [
          {
            url: 'https://factorio.com',
            text: 'Factorio Website',
            caption: 'The official website.',
          },
          {
            url: 'https://wiki.factorio.com',
            text: 'Factorio Wiki',
            caption: 'More in depth info.',
          },
          {
            url: 'https://mods.factorio.com/',
            text: 'Factorio Mod Portal',
            caption: 'Browse & download mods.',
          },
          {
            url: 'https://forums.factorio.com/',
            text: 'Factorio Forums',
            caption: 'Help make the game better!',
          },
          {
            url: 'https://www.factorio.com/blog/ ',
            text: 'Factorio Blog',
            caption: 'Unreleased features & news.',
          },
          {
            url: 'https://www.youtube.com/channel/UC5B2sfAI2MjD7aNhUXHAeyA',
            text: 'Factorio Youtube',
            caption: 'Trailers & demos.',
          },
        ],
      },
      {
        text: 'Unofficial',
        links: [
          {
            url: 'https://alt-f4.blog/',
            text: 'Alt-F4 Blog',
            caption: 'FFF inspired fan blog.',
          },
          {
            url: 'https://www.reddit.com/r/factorio',
            text: 'Reddit',
            caption: 'Lots of helpful users.',
          },
          {
            url: 'https://www.reddit.com/r/technicalfactorio/',
            text: 'Reddit (Technical)',
            caption: 'Advanced players.',
          },
          {
            url: 'https://discordapp.com/invite/factorio',
            text: 'Discord',
            caption: 'Discuss the game in realtime.',
          },
          {
            url: 'https://discord.com/oauth2/authorize?scope=bot+applications.commands&client_id=310607046020169729&permissions=379968',
            text: 'Discord Blueprint Bot',
            caption: 'Invite to preview blueprints.',
          },
          {
            url: 'https://www.facebook.com/groups/150323068632560/',
            text: 'Facebook',
            caption: 'If you dare',
          },
          {
            url: 'https://factorio.zone/',
            text: 'Factorio Zone',
            caption: 'Easy online servers',
          },
          {
            url: 'https://hub.docker.com/r/factoriotools/factorio',
            text: 'Docker',
            caption: 'Easy headless servers',
          },
          {
            url: 'https://www.speedrun.com/Factorio/resources',
            text: 'Speedruns',
            caption: 'How Fast can you go?',
          },
        ],
      },
      {
        text: 'Multiplayer Communities',
        links: [
          {
            url: 'https://explosivegaming.nl/',
            text: 'Explosive Gaming',
            caption: 'Hosts Multiplayer Maps',
          },
          {
            url: 'https://redmew.com/',
            text: 'Redmew',
            caption: 'Custom scenarios: Diggy, Crashsite',
          },
          {
            url: 'https://getcomfy.eu/',
            text: 'Comfy',
            caption: 'Custom scenarios: Biter Battles, Mnt Fortress',
          },
          {
            url: 'https://discord.gg/mtPyHfW',
            text: 'Factorio One',
            caption: 'Custom scenarios: Oarc, Rail Earth',
          },
          {
            url: 'https://discord.gg/ePjHDK4',
            text: 'Factorio MMMO',
            caption: 'Hosts Multiplayer Events',
          },
          {
            url: 'https://red-circuit.org/',
            text: 'Red Circuit',
            caption: 'Multiplayer Events',
          },
          {
            url: 'https://www.factoriogames.com/',
            text: 'Factorio Olympics',
            caption: 'Multiplayer Competitions',
          },
          {
            url: 'https://m45sci.xyz/',
            text: 'M45',
            caption:
              'Multiplayer community with weekly and monthly map resets.',
          },
        ],
      },
    ],
    communityLinks: [
      {
        text: 'Ratio Planners/Calculators',
        links: [
          {
            url: 'https://kirkmcdonald.github.io/calc.html',
            text: "Kirk's Calc",
          },
          {
            url: 'http://doomeer.com/factorio',
            text: "Doomer's Calc",
          },
          {
            url: 'https://deniszholob.github.io/factorio-machine-ratio-calc/',
            text: 'Generic Machine Ratio Calc',
          },
          {
            url: 'https://calculatorio.com/',
            text: 'Calculatorio Production Calcs',
          },
          {
            url: 'https://factoriolab.github.io/',
            text: 'Factorio Lab',
          },
        ],
      },
      {
        text: 'Tools',
        links: [
          {
            url: 'https://davemcw.com/factorio/tech-tree/',
            text: 'Interactive Tech Tree Viewer',
          },
          {
            url: 'https://autotorio.com/blueprint',
            text: 'Blueprint Modifier + Ore & Oil Outpost Generator',
          },
          {
            url: 'https://fbe.teoxoy.com/',
            text: 'Blueprint Maker',
          },
          {
            url: 'http://miditorio.com/',
            text: 'Convert MIDI to Blueprints',
          },
          {
            url: 'https://github.com/demodude4u/Factorio-FBSR/tree/master/FactorioBlueprintStringRenderer',
            text: 'Blueprint String Renderer',
          },
        ],
      },
      {
        text: 'Guides',
        links: [
          {
            url: 'https://www.youtube.com/playlist?list=PLnIE0W-m629dSJPPEETVY71CQhOfZ6r7W',
            text: 'Factorio Fundamentals (JDPlays)',
          },
          {
            url: 'https://www.youtube.com/playlist?list=PLV3rF--heRVu2xlDGZiRbdb7nbwzM9Vyz',
            text: 'Factorio Master Class (Nilaus)',
          },
          {
            url: 'https://www.youtube.com/playlist?list=PLwehwVVQirAep2XwjX1IoJR4XIqU4eUCH',
            text: 'Factorio Fundamentals (Xterminator)',
          },
          {
            url: 'https://www.reddit.com/r/factorio/comments/arpn41/first_2030_minutes_guide_in_vanilla/',
            text: 'Beginner First 30 minutes',
          },
          {
            url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=862972621',
            text: 'Smelting',
          },
          {
            url: 'https://www.reddit.com/r/factorio/comments/4f38sk/factorio_train_automation_complete_parts_23_and/',
            text: 'Train Automation',
          },
          {
            url: 'https://wiki.factorio.com/Tutorial:Circuit_network_cookbook',
            text: 'Circuit Network Cookbook',
          },
        ],
      },
      {
        text: 'Designs',
        links: [
          {
            url: 'https://factoriomaps.com/',
            text: 'View/Download Maps',
          },
          {
            url: 'https://factorioblueprints.tech/',
            text: 'Factorio Blueprints .tech',
          },
          {
            url: 'https://factorioprints.com/top',
            text: 'Factorio Prints .com',
          },
        ],
      },
    ],
    creatorBlueprints: [
      {
        text: 'MojoD',
        url: 'https://github.com/MojoDTV/Factorio-Blueprints',
      },
      {
        text: 'Rain9441',
        url: 'https://pastebin.com/u/rain9441',
      },
      {
        text: 'Teoxoy',
        url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1177804260',
        caption: '(Late Game Belt Builds)',
      },
      {
        text: 'JDPlays',
        url: 'https://drive.google.com/drive/folders/1bM7Vh0Rf_JGQ39mRAXssDLmwsulDEdH_',
      },
      {
        text: 'Katherine of Sky',
        url: 'https://drive.google.com/drive/folders/0BwVHGs2mds_XRUVCekwxYnNldnc',
      },
      {
        text: 'Nilaus',
        url: 'https://pastebin.com/u/NilausTV',
      },
      {
        text: 'Nilaus Alt',
        url: 'https://nilaus.atlassian.net/wiki/spaces/PM/pages/1605635/Factorio',
      },
      {
        text: 'DDDGamer',
        url: 'https://deniszholob.github.io/factorio-blueprints/',
      },
      {
        text: 'Train Intersections',
        url: 'https://forums.factorio.com/viewtopic.php?f=194&t=46855',
      },
      {
        text: 'ElderAxe',
        url: 'https://www.patreon.com/ElderAxe/collections',
      },
    ],
  },
};
