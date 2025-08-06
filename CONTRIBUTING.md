# Contributing guide

This page explains how to start contributing to this project.

This project uses [Angular](https://angular.dev/) as the framework for the site.

## Let us assign the issue to you

Before you start working on an issue, please comment in the issue to let us know you're going to work on it.
This way we avoid duplicate work.

## Local development

If you want to develop on your own machine, follow these steps:

1. Install [NodeJS](https://nodejs.org/) `18.12.1` LTS (or newer).
2. Install [VSCode](https://code.visualstudio.com/) `v1.74` (or newer).
3. Clone the repository with the Git CLI, or with a Git UI like GitHub Desktop, Sourcetree, GitKraken etc.
4. Open the cloned folder with VSCode.
5. Install the [recommended extensions](.vscode/extensions.json) when prompted by VSCode.
6. Run `npm run i` to install the dependencies.
7. Start the development server for the app with `npm run start`.

## Hidden files in VSCode

This project has configured VSCode to hide some files.
The `adrianwilczynski.toggle-hidden` extension adds a toggle to show or hide, the hidden files.

The list of hidden files is in the `files.exclude` section of our [VS Code `settings.json` file](.vscode/settings.json).

## Storybook

Reference any components in the Storybook instance by:

1. Running Storybook with the `npm run storybook` command.
2. Browsing the list of components.

Read the [Storybook docs](https://storybook.js.org/docs) to learn how to use the components.

## Where to find stuff

This project uses [Angular](https://angular.dev/).

### Source code

All source code is in the [`src` folder](./src/).

The code you'll need most is in the [`src/app/` folder](./src/app/).
You'll often work in the internal folders, like [cheat sheet components](./src/app/cheat-sheets/), to create or edit code.

The [`app.component.ts` file](./src/app/app.component.ts) is the main entry point for the Angular app, along with other `app.xxx.ts` files.

The rest of the [`src` folder](./src/) holds the main [`index.html`](./src/index.html) where all the Angular code gets generated to, and is what is hosted.
The `src` folder also has basic resources like favicons and metadata for SEO.

### Assets and stylesheets

The [`assets` folder](./src/assets/) holds the images and icons.

The [`styles` folder](./src/styles/) holds the CSS stylesheets.

### Config files for linting, formatting, testing

Many files and folders in the top level of the repository are config files for our linting, formatting or testing tools.

## Writing code

When creating new components, services, utilities, and so on:

1. Install, and use, the [Angular Files Generator Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=deniszholob.angular-files-generator). This extension is already enabled if you installed the recommended extensions.
2. The extension can generate new files matching our project's style. Depending on the type you select the extension generates starter TypeScript, HTML, Storybook and Jest test files. This helps you develop well-documented and tested code.

### Strongly type all TypeScript code

Make sure _all_ the TypeScript code is _strongly typed_.
This makes your code more robust and documents the code.
This lets us know the data types used in any given place.
[Angular Files Generator Extension](https://marketplace.visualstudio.com/items?itemName=deniszholob.angular-files-generator) can help here too with models, enums etc...

## Tips

### Making a new cheat sheet

Look at the [cs-common-ratios](./src/app/cheat-sheets/game-base/cs-common-ratios/) example first.
Then follow these steps:

1. In the [cheat-sheets](./src/app/cheat-sheets/) folder look for the category you want to add to/modify.
2. Use the [Angular Files Generator Extension](https://marketplace.visualstudio.com/items?itemName=deniszholob.angular-files-generator) to generate a new `Standalone Component` in one of those categories
3. Add the newly generated component module to the matching category's module (e.g. game-base.module.ts) `imports` array.
4. In the `.component` file add the following (if not already generated):

   ```ts
   export const YOUR_NEW_SHEET_NAV: NavData = newNavData(
    'Your Title',
    FactorioIcons.Icons_RepairPack
   );
   ...
   public readonly cheatSheetTitle: string = YOUR_NEW_SHEET_NAV.title;
   public readonly cheatSheetIconId: FactorioIcons = YOUR_NEW_SHEET_NAV.sheetIconId;
   ```

5. In the `.html` file add the `<app-cheat-sheet-template [iconId]="cheatSheetIconId" [title]="cheatSheetTitle">Your Content Here</app-cheat-sheet-template>`.
6. In the [`nav.data.ts`](https://github.com/deniszholob/factorio-cheat-sheet/src/app/layout/nav/nav.data.ts) add to the nav array such as `NAV_BASE`:
   ```ts
   export const NAV_BASE: NavData[] = [
    ...
   YOUR_NEW_SHEET_NAV,
   ...
   ]
   ```
7. In the module `component.html` (e.g. `game.base.component.html`) add in the component tag (e.g. `<app-cs-common-ratios></app-cs-common-ratios>`).

### Making a new cheat sheet category (mods, expansions, etc)

Follow these steps:

1. In the [`cheat-sheets` folder](./src/app/cheat-sheets/) use the `deniszholob.angular-files-generator` extension to generate a new `Module Component`.
2. Follow the other category examples to create new routes, update the HTML and so on.
3. Update the [`cheat-sheets.module.ts`](./src/app/cheat-sheets/cheat-sheets.module.ts) file.
4. Update the [`nav.data.ts`](./src/app/layout/nav/nav.data.ts) file.
5. Add new route to the [`sitemap.xml`](./src/sitemap.xml) file.
6. Add cheat sheets, if needed, by following the steps listed in the _Making a new cheat sheet_ section above.

## Before opening a Pull Request

When your work is done, please:

1. If you're making visual changes to the cheatsheets: run the preview server with `npm run start` and make screenshots of your changes.
2. Run `npm run build`.
3. After a successful build, commit and then push your changes to your fork. If you're fixing an Issue on GitHub: link to that issue in your Git commit message, for example: `Closes #issueNumberThatGetsFixed`.
4. Create a new Pull Request, and follow the steps in the Pull Request template.

## Debug

If you get an error with precommit hooks on Mac/Linux, see this [discussion on Stack Overflow](https://stackoverflow.com/a/72279243).

## Generating a PDF

1. Use Firefox, to "print" the page to PDF.
2. Remove the margins, headers and footers.
3. But keep the backgrounds.
4. Scale to `90%`.
5. Remove the last page if it's empty.
