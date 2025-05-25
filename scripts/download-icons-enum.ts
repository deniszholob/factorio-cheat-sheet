import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';

const ICONS_ENUM_URL =
  'https://raw.githubusercontent.com/deniszholob/icons-factorio/refs/heads/main/factorio-icons/factorio-icons.enum.ts';
const OUTPUT_PATH = 'src/app/shared/factorio-icons.enum.ts';

function main() {
  const localFolder = path.dirname(OUTPUT_PATH);

  // Ensure the directory exists
  if (!fs.existsSync(localFolder)) {
    fs.mkdirSync(localFolder, { recursive: true });
  }

  downloadFile(ICONS_ENUM_URL, OUTPUT_PATH)
    .then(() => {
      console.log(`Downloaded to ${OUTPUT_PATH}`);
    })
    .catch((err) => {
      console.error(`Error downloading file: ${err.message}`);
    });
}

/**
 * Downloads a file from a given URL to a local destination.
 * @param fileUrl - The URL of the file to download.
 * @param outputLocationPath - The local file path where the file should be saved.
 * @returns A promise that resolves when the file has been successfully downloaded.
 */
function downloadFile(
  fileUrl: string,
  outputLocationPath: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputLocationPath);

    https
      .get(fileUrl, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(`Failed to get '${fileUrl}' (${response.statusCode})`)
          );
          return;
        }

        response.pipe(file);

        file.on('finish', () => {
          file.close();
          resolve();
        });
      })
      .on('error', (err: Error) => {
        fs.unlink(outputLocationPath, () => reject(err)); // Clean up partial file
      });
  });
}

main();
