/* eslint-disable no-param-reassign */
const through = require('through2');
const path = require('path');

const resolvePath = (code, filePath, rootPath, targetPaths) => {
  const tscpaths = Object.keys(targetPaths);
  const lines = code.split('\n');
  return lines.map((line) => {
    const matches = [];
    const requireMatches = line.match(/require\(('|")(.*)('|")\)/g);

    Array.prototype.push.apply(matches, requireMatches);

    if (!matches) return line;

    matches.forEach((match) => {
      tscpaths.forEach((tscpath) => {
        const requiredModules = match.match(new RegExp(tscpath, 'g'));

        if (requiredModules && requiredModules.length > 0) {
          requiredModules.forEach(() => {
            const sourcePath = path.dirname(filePath);
            let targetPath;

            if (tscpath[tscpath.length - 1] === '*') {
              targetPath = path.resolve(`${rootPath}/${targetPaths[tscpath].map((_p) => _p.replace('/*', ''))}`);

              line = line.replace(new RegExp(tscpath.slice(0, -2), 'g'), `./${path.relative(sourcePath, targetPath)}`);
              line = line.replace(new RegExp(/\\/, 'g'), '/');
            } else {
              targetPath = path.resolve(`${rootPath}/${targetPaths[tscpath]}`);

              line = line.replace(new RegExp(tscpath, 'g'), `./${path.relative(sourcePath, targetPath)}`);
            }
          });
        }
      });
    });

    return line;
  }).join('\n');
};

module.exports = (importOptions) => {
  importOptions.paths = importOptions.paths || {};

  return through.obj((file, encoding, callback) => {
    const transformedFile = file;

    let code = file.contents.toString(encoding);
    code = resolvePath(code, file.history.toString(), importOptions.outDir, importOptions.paths);

    transformedFile.contents = Buffer.from(code);

    callback(null, transformedFile);
  });
};
