/* eslint-env es6 */
// @ts-check

const fs = require('fs');

function main() {
  const filePath = 'src/app/app.modified.ts';
  const updateDate = Date.now();
  renderFile(filePath, updateDate);
}

/**
 * @param {string} filePath
 * @param {number} updateDate
 */
function renderFile(filePath, updateDate) {
  const contents = fillTemplate(updateDate);
  fs.writeFile(filePath, contents, (err) => {
    if (err) {
      console.error('Error occurred:', err);
    }
    const formattedDate = `${formatDate(updateDate)} (${updateDate})`;
    const msg = `Modify Date updated to ${formattedDate}`;
    console.log(msg);
  });
}

/**
 * @param {number} dateNumber
 */
function fillTemplate(dateNumber) {
  return `// === Auto Generated during deployment build === //

/** MS since UNIX epoch - can use with angular date pipe */
export const APP_MODIFIED_DATE: number = ${dateNumber};
`;
}

/**
 * Turns date ms number to date string
 * @param {number} dateNum
 * @returns {string}
 */
function formatDate(dateNum) {
  const myDate = new Date(dateNum);
  const day = myDate.getDate();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();
  const h = myDate.getHours();
  const m = myDate.getMinutes();
  const s = myDate.getSeconds();
  return month + 1 + '/' + day + '/' + year + ' ' + h + ':' + m + ':' + s;
}

main();
