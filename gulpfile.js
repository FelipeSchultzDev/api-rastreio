const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsPath = require('gulp-typescript-path-resolver');

const tsConfig = require('./tsconfig.json');

const tsProject = ts.createProject('./tsconfig.json');

const func = require('./gulp-path-fix');

gulp.task('default', () => {
  const tsResult = tsProject
    .src()
    .pipe(tsProject())
    .pipe(tsPath.tsPathResolver(tsConfig.compilerOptions))
    // .pipe(func())
    .pipe(gulp.dest('dist'));

  return tsResult;
});

// const gulp = require('gulp');
// const ts = require('gulp-typescript');
// const tsImport = require('gulp-typescript-path-resolver');
// const tsConfig = require('./tsconfig.json');

// const tsProject = ts.createProject('./tsconfig.json');

// gulp.task('build', () => tsProject
//   .src()
//   .pipe(tsProject())
//   .pipe(tsImport.tsPathResolver(tsConfig.compilerOptions))
//   .pipe(gulp.dest(tsConfig.compilerOptions.outDir)));
