// Global App Constants
export const APP_SETTINGS = {
    app: {
        appTitle: 'Factorio Cheat Sheet',
        version: '0.15',
        lastUpdate: '2017/10/13',
    },
    links: {
        getLocalImagePath: function (imageName) {
            return './assets/images/' + imageName;
        },
        wikiImagesBase: 'https://wiki.factorio.com/images/'
    },
    reference: [
        {
            name: 'Factorio Wiki',
            website: 'https://wiki.factorio.com/'
        },
        {
            name: 'Factorio 0.15 Cheat Sheet',
            website: 'https://docs.google.com/presentation/d/1kQRwD9y92yeEInJaDrTzwc3qvk16UzA8GJ-n_RUgxu8/'
        },
        {
            name: 'Factorio 0.14 Cheat Sheet',
            website: 'https://docs.google.com/presentation/d/1wIexilsTFKRbMIWc1MOY5XaAOPwNEU0AGMbSTAwqa3Q/'
        },
        {
            name: 'Factorio 0.12 Cheat Sheet',
            website: 'https://forums.factorio.com/viewtopic.php?f=134&t=18162'
        }
    ],
    contributors: [
        {
            name: 'Denis Zholob',
            website: 'http://deniszholob.com'
        }
    ]
};
