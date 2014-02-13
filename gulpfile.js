var gulp = require('gulp');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');

var paths = {
  input: {
    scripts: ['js/**/*.js'],
    css: ['css/**/*.styl']
  },
  output: {
    scripts: 'public/js',
    css: 'public/css'
  }
};

gulp.task('jshint', function(){
  gulp.src(paths.input.scripts)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('changed', function(){
  gulp.src(paths.input.scripts)
      .pipe(changed());
});

gulp.task('stylus', function(){
  gulp.src(paths.css)
      .pipe(stylus())
      .pipe(gulp.dest(paths.output.css));
});
