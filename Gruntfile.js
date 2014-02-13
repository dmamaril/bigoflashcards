var fs    = require('fs'),
    path  = require('path'),
    bower = require('bower');

/**
 *
 * Configuration options are loaded from files in tasks/options
 *
 * Normally inside this file you'd see:
 *
 * clean: {
 *   development: ['file-to-clean']
 * }
 *
 * Instead the file at tasks/options/clean.js contains:
 *
 * module.exports = {
 *   development: ['file-to-clean']
 * }
 *
 * Sharing Configuration Options:
 *
 * Configuration options used across multiple modules are set in the following
 * manner:
 *
 * `grunt.config('settings', settings);`
 * `grunt.config('paths', settings.paths);`
 *
 *
 * Furthermore, getting those options occurs in a similar fashion:
 *
 * `grunt.config('paths.output.js');` //=> public/js
 *
 * Using the conventional <%= paths.output.js %> will NOT work
 *
 */

module.exports = function(grunt) {

  // grunt.initConfig({

  //   liveReloadPort: process.env.LRPORT || 35729,
  //   port: process.env.PORT || 8000,
  //   mochaPhantomPort: process.env.MOCHA_PHANTOM_PORT || 8001,
  //   hostname: 'localhost',
  //   templates: {},

  //   nodemon: {
  //     dev: {
  //       script: 'server.js',
  //       options: {
  //         ext: 'js, json',
  //         ignore: ['node_modules/**', 'public/**'],
  //         nodeArgs: ['--debug']
  //       }
  //     }
  //   },

  //   thoraxInspector: {
  //     editor: 'subl',
  //     background: true,
  //     paths: {
  //       views: grunt.config('paths.views'),
  //       models: grunt.config('paths.models'),
  //       collections: grunt.config('paths.collections'),
  //       templates: grunt.config('paths.templates')
  //     }
  //   },

  //   jshintAll: {
  //     src: [
  //       'js/**/*.js',
  //       'test/**/*.js',
  //       '!tmp*/**/*',
  //       'Gruntfile.js',
  //       'tasks/**/*.js'
  //     ],
  //     options: { jshintrc: '.jshintrc' }
  //   },

  //   cleanStyles: [
  //     grunt.config('paths.output.css')
  //   ],

  //   copyStyles: {
  //     files: [
  //       {
  //         expand: true,
  //         cwd: grunt.config('paths.css'),
  //         src: '*.css',
  //         dest: grunt.config('paths.output.css')
  //       }
  //     ]
  //   },

  //   compile: {
  //     files: [{
  //       expand: true,
  //       cwd: grunt.config('paths.css'),
  //       src: ['*.styl'],
  //       dest: grunt.config('paths.output.css'),
  //       ext: '.css'
  //     }]
  //   },

  //   paths: {
  //     'public': 'public',
  //     dist: 'dist',
  //     tmp: 'tmp',
  //     distOutput: {
  //       js: 'dist/main.js',
  //     },
  //     output: {
  //       js: 'public/js',
  //       css: 'public/css'
  //     },
  //     js: 'js',
  //     css: 'css',
  //     templates: 'js/templates',
  //     views: 'js/views',
  //     models: 'js/models',
  //     collections: 'js/collections'
  //   }
  // });

  // grunt.loadNpmTasks('grunt-nodemon');
  // grunt.loadNpmTasks('grunt-express-server');
  // grunt.loadNpmTasks('thorax-inspector');

  // grunt.registerTask('ensure-installed', function() {
  //   var complete = this.async();
  //   if (!fs.existsSync(path.join(__dirname, '..', 'bower_components'))) {
  //     bower.commands.install().on('data', function(data) {
  //       process.stdout.write(data);
  //     }).on('error', function(data) {
  //       process.stderr.write(data);
  //     }).on('end', function (data) {
  //       if (data) {
  //         process.stdout.write(data);
  //       }
  //       complete();
  //     });
  //   } else {
  //     complete();
  //   }
  // });

  // grunt.registerTask('jshintAll',
  //     src: [
  //       'js/**/*.js',
  //       'test/**/*.js',
  //       '!tmp*/**/*',
  //       'Gruntfile.js',
  //       'tasks/**/*.js'
  //     ],
  //     options: { jshintrc: '.jshintrc' }
  // );

  // grunt.registerTask('styles', [
  //   'copyStyles',
  //   'stylus'
  // ]);

  // grunt.registerTask('stylesDevelopment', [
  //   'cleanStyles',
  //   'compile'
  // ]);

  // grunt.registerTask('build', [
  //   'ensure-installed',
  //   'jshintAll'
  // ]);
  
  // grunt.registerTask('runThorax', [
  //   'thoraxInspector'
  // ]);

  // grunt.registerTask('default', [
  //   'build',
  //   'stylesDevelopment',
  //   'runThorax',
  //   'nodemon'
  //   // 'watch'
  // ]);



  var settings = {
    liveReloadPort: process.env.LRPORT || 35729,
    port: process.env.PORT || 8000,
    mochaPhantomPort: process.env.MOCHA_PHANTOM_PORT || 8001,
    hostname: 'localhost',
    templates: {},
    paths: {
      'public': 'public',
      dist: 'dist',
      tmp: 'tmp',
      distOutput: {
        js: 'dist/main.js',
      },
      output: {
        js: 'public/js',
        css: 'public/css'
      },
      js: 'js',
      css: 'css',
      templates: 'js/templates',
      views: 'js/views',
      models: 'js/models',
      collections: 'js/collections'
    }
  };

  grunt.config('settings', settings);
  grunt.config('paths', settings.paths);

  
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('thorax-inspector');

  grunt.loadTasks('tasks');

  // grunt.registerTask('serve', [
  //   'serve:nodemon'
  // ]);

  grunt.registerTask('styles:development', [
    'clean:styles',
    'styles'
  ]);

  grunt.registerTask('build', [
    'ensure-installed',
    'jshint:all'
  ]);

  /**
   * livereload tests + app + jshint when saving a file
   */
  grunt.registerTask('default', [
    'build',
    'styles:development',
    'thorax:inspector',
    // 'serve:nodemon',
    'connect:development',
    'watch'
  ]);

  // *
  //  * same as default `grunt` but also runs karma tests on file save
  //  *
  //  * a faster approach is to actually run the default task and in a seperate
  //  * terminal run `karma start` which will bypass grunt's slow file watching,
  //  * shaving off about a second on autoreload, however, you'll need to deal
  //  * with having to restart two different windows in the event of something
  //  * drastic.
   
  grunt.registerTask('autotest', [
    'build',
    'styles:development',
    'thorax:inspector',
    'karma:server',
    // 'serve:nodemon',
    'connect:development',
    'watch'
  ]);

  // compile production ready assets to dist/
  grunt.registerTask('production', [
    'clean:production',
    'build',
    'styles:development',
    'cssmin',
    'copy:prepareBuild',
    'requirejs:production',
    // 'serve:nodemon'
    'connect:production'
  ]);

  // aliased as npm test, and therefore used by travis ci
  
  grunt.registerTask('test', [
    'build',
    'karma:ci'
  ]);

  // run tests one time in chrome, firefox, safari
  grunt.registerTask('test-deploy', [
    'build'
    'karma:deploy'
  ]);

  // manually run grunt within a terminal window, provides nicer UI output
  // than karma
  grunt.registerTask('test-mocha-phantomjs', [
    'build',
    'connect:CIServer',
    'mocha_phantomjs'
  ]);

  require('load-grunt-config')(grunt, {
    configPath: __dirname + '/tasks/options'
  });

};
