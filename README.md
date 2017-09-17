# Factorio Cheat Sheet [![Build Status](https://travis-ci.org/DDDGamer/factorio-cheat-sheet.svg?branch=master)](https://travis-ci.org/DDDGamer/factorio-cheat-sheet)

# [Cheat Sheet Webpage](https://dddgamer.github.io/angular-travis-ghpages/)

* Cheat Sheet for [Factorio](https://www.factorio.com/)
* Master branch is for the source code thats hosted [here](https://dddgamer.github.io/angular-travis-ghpages/).
* See the [Google Slides](https://docs.google.com/presentation/d/1kQRwD9y92yeEInJaDrTzwc3qvk16UzA8GJ-n_RUgxu8/edit#slide=id.g25341ba48a_605_0) version as well.

# To contribute
Make a new branch and follow the belt-thoughput example
* Make a new json data in assets/data
* Make a new component in src/app/views/cheat-sheets (make sure to add to the components in the index.ts and app.module.ts)
* Call the DataService.getCheatSheetData from src/app/services/data.service in the new component
* Use the src/app/shared/cheat-sheet template along with data in the component html file to customize the presentation

When done
* Run `npm run build`
* If successful build, then commit and push your changes.
* Create a Pull Request
