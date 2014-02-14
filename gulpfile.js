var gulp = require('gulp');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var lr = require('tiny-lr');
var livereload = require('gulp-livereload');
var stylus = require('gulp-stylus');
var nodemon = require('gulp-nodemon');
var server = lr();

var paths = {
  all: ['css/**/*.styl', 'js/**/*.js', 'server/**/*.js', 'js/**/*.hbs'],
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
      .pipe(changed(paths.output.scripts))
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(livereload(server));
});

gulp.task('stylus', function(){
  gulp.src(paths.input.css)
      .pipe(changed(paths.output.css))
      .pipe(stylus())
      .pipe(gulp.dest(paths.output.css))
      .pipe(livereload(server));
});

gulp.task('develop', function(){
  nodemon({
    script: 'server.js',
  });
});

gulp.task('watch', function(){
  gulp.watch(paths.all, ['jshint', 'stylus']);
  server.listen(35729, function (err) {
    if (err) return console.log(err);
    gulp.watch(paths.all, ['jshint']);
  });
});

gulp.task('default', ['watch', 'develop']);
