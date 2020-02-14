const through = require('through2');

// const replaceBackSlash = (string = '') => {
//   string.replace('\\', '/');

//   console.log(string.indexOf('\\'));
// };

module.exports = () => {
  console.log('----------');

  return through.obj((file, encoding, callback) => {
    const transformedFile = file;

    let code = file.contents.toString(encoding);
    code = code.indexOf('\\') >= 0 ? code.replace(new RegExp(/\\/, 'g'), '/') : code;

    transformedFile.contents = Buffer.from(code);

    callback(null, transformedFile);
  });
};
