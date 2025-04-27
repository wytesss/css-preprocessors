const util = require('util');

const sass = require('sass');
const sassRender = util.promisify(sass.render);

module.exports.render = (options) => {
  return sassRender({
    // Where sass should look for files when you use @import
    includePaths: ['./sass'],

    // Using a compact output style allows you to use concise 'expected' CSS
    outputStyle: 'compact',

    // Merge in any other options you pass when calling render
    ...options
  })
};
