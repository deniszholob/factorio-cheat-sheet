// === App level constants === //

/** Contains constants for the app */
export const APP_INFO: AppInfo = {
  app: {
    name: 'factoriocheatsheet.com',
    url: 'https://factoriocheatsheet.com',
    title: 'Factorio Cheat Sheet',
  },
  author: {
    name: 'Denis Zholob',
    url: 'https://deniszholob.com',
  },
  github: {
    name: 'Github Source',
    url: 'https://github.com/deniszholob/factorio-cheat-sheet',
    icon: 'fab fa-github',
  },
  discord: {
    name: 'Discord',
    url: 'https://discord.gg/PkyzXzz',
    icon: 'fab fa-discord',
  },
  kofi: {
    name: 'Ko-Fi',
    url: 'https://ko-fi.com/deniszholob',
    icon: 'fa fa-coffee',
  },
  patreon: {
    name: 'Patreon',
    url: 'https://www.patreon.com/deniszholob',
    icon: 'fab fa-patreon',
  },
  data_version: '2.0.7',
  // languages: ['en-US'],
  links: {
    getLocalImagePath(imageName) {
      return './assets/images/' + imageName;
    },
    wikiImagesBase: 'https://wiki.factorio.com/images/',
  },
};

/** App level constants */
export interface AppInfo {
  app: Hyperlink;
  author: Hyperlink;
  github: Hyperlink;
  discord: Hyperlink;
  kofi: Hyperlink;
  patreon: Hyperlink;
  /** Factorio Version */
  data_version: string;
  /** Languages supported by this app */
  // languages: string[];
  links: ImageLinks;
  // old_cheat_sheets: Hyperlink[];
  // pdfs: Hyperlink[];
}

/** Hyperlink data */
export interface Hyperlink {
  name: string;
  url: string;
  title?: string;
  /** Font Awesome icon class */
  icon?: string;
}

/** Easy image access */
interface ImageLinks {
  getLocalImagePath: (imageName: string) => string;
  wikiImagesBase: string;
}
