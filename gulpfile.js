var gulp       = require('gulp');
var rollup     = require('gulp-rollup');
var rename      = require('gulp-rename');
// var uglify = require('gulp-uglify');
// var gulpUtil = require('gulp-util');
// var babel = require('gulp-babel');

gulp.task('bundle', function() {
  gulp.src('./src/**/*.js')
    // transform the files here.
    .pipe(rollup({
      // any option supported by Rollup can be set here.
      entry: './src/index.js'
    }))
    // .pipe(babel({
            // presets: ['es2015']
    // }))
    // .pipe(uglify().on('error', gulpUtil.log)) // notice the error event here
    .pipe(rename('content.js'))
    .pipe(gulp.dest('./'));
});