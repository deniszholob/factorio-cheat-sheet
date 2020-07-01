# To contribute

**If you are working on an existing issue, please claim it with your comment, so there is no duplicate work.**

## What you will need before you begin:

1. Ensure NodeJS version 12.18.2 LTS is installed on your system.
2. Clone the repository.
3. Run `npm install` in the folder that you've just cloned to ensure you have all dependencies that are needed for development.

## Guide on making a new cheat-sheet:

If you're making a new cheat-sheet; follow the belt-throughput example:
* Make a new JSON data in `assets/data`.
* Make a new component in `src/app/views/cheat-sheets` (Include the component in the `index.ts` and `app.module.ts` files).
* Call the `DataService.getCheatSheetData` from `src/app/services/data.service` in the new component.
* Use the `src/app/shared/cheat-sheet` template along with data in the component HTML file to customize the presentation.

## Steps to follow when your work is ready:

When your work is done:
1. Run `npm run build`.
2. After a successful build, make a commit and push your changes. If you're fixing a existing issue: be sure to link to that issue in the git commit message, like so: `Closes #issueNumberThatGetsFixed`.
3. Create a new Pull Request.
4. Write a good description of the changes this pull-request will make.
5. You must provide screenshots if there is a visual change.
