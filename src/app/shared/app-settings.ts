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
    data_version: '0.17.69, 0.18.25',
    // languages: ['en-US'],
    links: {
        getLocalImagePath: function (imageName) {
            return './assets/images/' + imageName;
        },
        wikiImagesBase: 'https://wiki.factorio.com/images/',
    },
    old_cheat_sheets: [
        // {
        //     name: 'Factorio 0.16 Cheat Sheet',
        //     url: 'https://v016.factoriocheatsheet.com/',
        // },
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
    pdfs: [
        {
            name: 'Cheat Sheet v0.17/v0.18 pdf',
            url: 'https://www.dropbox.com/sh/sq14ydb7hs59trn/AAA1MUghu5gTy9gJeFX3v0RYa/Factorio_Cheat_Sheet_v0.17.pdf',
        },
        {
            name: 'Cheat Sheet v0.17/v0.18 pdf light',
            url: 'https://www.dropbox.com/sh/sq14ydb7hs59trn/AAB7bfGnNHWyMcdk3Jv7PWDfa/Factorio_Cheat_Sheet_v0.17_light.pdf',
        },
        {
            name: 'Cheat Sheet v0.16 pdf',
            url: 'https://www.dropbox.com/sh/sq14ydb7hs59trn/AACHIdw9vZae1zlh8kCh3HJta/Factorio_Cheat_Sheet_v0.16.pdf',
        },
        {
            name: 'Cheat Sheet v0.16 pdf light',
            url: 'https://www.dropbox.com/sh/sq14ydb7hs59trn/AAD_4cZlVFlGkd2EByGF5ocNa/Factorio_Cheat_Sheet_v0.16_light.pdf',
        },
    ]
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
    old_cheat_sheets: Hyperlink[];
    pdfs: Hyperlink[];
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
