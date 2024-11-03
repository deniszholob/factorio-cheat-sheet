const fs = require('fs');
const path = require('path');

const extensionsFilePath = path.join('.vscode/extensions.json');
const devContainerFilePath = path.join('.devcontainer/devcontainer.json');

/**
 * Reads extension IDs from the specified JSON file.
 *
 * @param {string} filePath - The path to the extensions JSON file.
 * @returns {string[]} An array of extension IDs.
 */
function readExtensionsFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const extensions = fileContent.match(/"([^"]+)"/g);
  return extensions.filter(
    (ext) => ext !== '"recommendations"' && ext !== '"unwantedRecommendations"'
  );
}

/**
 * Updates the devcontainer.json file with the specified extensions.
 *
 * @param {string} devContainerPath - The path to the devcontainer JSON file.
 * @param {string[]} extensions - A formatted string of extensions to include.
 */
function updateDevContainerFile(devContainerPath, extensions) {
  const updatedContent = fs.readFileSync(devContainerPath, 'utf-8');
  const regex = /\n(\s*)"extensions": \[.*?\]/s;
  // $1 is capture group for leading spacing, so we can preserve formatting
  const extensionsFormatted = extensions.join(',\n$1  ').trimEnd();
  const subst = `\n$1"extensions": [\n$1  ${extensionsFormatted}\n$1]`;
  const result = updatedContent.replace(regex, subst);
  fs.writeFileSync(devContainerPath, result);
}

function main() {
  const extensions = readExtensionsFromFile(extensionsFilePath);
  // console.log('Raw extracted content:', extensions);

  if (extensions.length > 0) {
    updateDevContainerFile(devContainerFilePath, extensions);
    console.log('Updated devcontainer.json with extensions.', extensions);
  } else {
    console.log('No extensions found to update.');
  }
}

main();
