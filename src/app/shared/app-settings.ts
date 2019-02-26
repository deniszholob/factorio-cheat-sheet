// === App level constants === //

/** Contains constants for the app */
export const APP_SETTINGS: AppInfo = {
    app: {
        name: 'factoriocheatsheet.com',
        url: '//factoriocheatsheet.com',
        title: 'Factorio Cheat Sheet',
    },
    author: {
        name: 'Denis Zholob',
        url: '//deniszholob.com',
    },
    github: {
        name: 'Github Source',
        url: '//github.com/deniszholob/factorio-cheat-sheet',
    },
    data_version: '0.17',
    // languages: ['en-US'],
    links: {
        getLocalImagePath: function (imageName) {
            return './assets/images/' + imageName;
        },
        wikiImagesBase: 'https://wiki.factorio.com/images/',
    },
    reference: [
        {
            name: 'Factorio Wiki',
            url: 'https://wiki.factorio.com/',
        },
        {
            name: 'Factorio 0.15 Cheat Sheet',
            url: 'https://docs.google.com/presentation/d/1kQRwD9y92yeEInJaDrTzwc3qvk16UzA8GJ-n_RUgxu8/',
        },
        {
            name: 'Factorio 0.14 Cheat Sheet',
            url: 'https://docs.google.com/presentation/d/1wIexilsTFKRbMIWc1MOY5XaAOPwNEU0AGMbSTAwqa3Q/',
        },
        {
            name: 'Factorio 0.12 Cheat Sheet',
            url: 'https://forums.factorio.com/viewtopic.php?f=134&t=18162',
        },
    ],
    contributors: [
        {
            name: 'Denis Zholob',
            url: '//deniszholob.com',
        },
    ],
};

/** App level constants */
interface AppInfo {
    /** App link */
    app: Hyperlink;
    /** Author of this app */
    author: Hyperlink;
    /** Github link */
    github: Hyperlink;
    /** Factorio Version */
    data_version: string;
    /** Languages supported by this app */
    // languages: string[];
    links: ImageLinks;
    reference: Hyperlink[];
    contributors: Hyperlink[];
}

/** Hyperlink data */
export interface Hyperlink {
    name: string;
    url: string;
    title?: string;
}

/** Easy image access */
interface ImageLinks {
    getLocalImagePath: FunctionStringCallback;
    wikiImagesBase: string;
}
