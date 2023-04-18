const process = require('process');

/**
 * @type {'development' | 'production'}
 */
let mode = 'development';

process.argv.forEach((value) => {
  const array = value.split('=');
  if (array.length === 2) {
    console.log(`${array[0]}=${array[1]}`);
    if (array[0] === 'mode') {
      mode = array[1];
    }
  }
});

module.exports.mode = mode;
