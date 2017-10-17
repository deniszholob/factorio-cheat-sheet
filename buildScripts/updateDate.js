/** Run on build to generate last update date to json file. */

const fs = require('fs');
const date = Date.now();
const outputFile = 'src/assets/data/update.json';

// Data service looks for "content"
const outputData = {
    content: date
}

// Prepare string to write to file
const json = JSON.stringify(outputData);

// Attempt to write to file
fs.writeFile(outputFile, json, 'utf8', (error) => {
    throw error; // Rethrow any errors on callback
});
