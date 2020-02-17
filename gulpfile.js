const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsConfig = require('./tsconfig.json');

const tsProject = ts.createProject('./tsconfig.json');

const tsPathResolver = require('./gulp-path-resolver');

gulp.task('default', () => {
  const tsResult = tsProject
    .src()
    .pipe(tsProject())
    .pipe(tsPathResolver(tsConfig.compilerOptions))
    .pipe(gulp.dest('dist'));

  return tsResult;
});
