/*!
 * Bootstrap CSS Utils's Gruntfile
 * http://github.com/trumbitta/bootstrap-css-utils
 * Copyright 2015 William Ghelfi
 * Licensed under MIT (https://github.com/trumbitta/bootstrap-css-utils/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Bootstrap CSS Utils v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',

    // Task configuration.
    clean: {
      dist: 'dist'
    },

    less: {
      options: {
        strictMath: true,
        sourceMap: true,
        outputSourceFiles: true,
        sourceMapURL: '<%= pkg.name %>.css.map',
        sourceMapFilename: 'dist/<%= pkg.name %>.css.map'
      },
      compile: {
        src: 'less/<%= pkg.name %>.less',
        dest: 'dist/<%= pkg.name %>.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 8",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6"
        ]
      },
      all: {
        options: {
          map: true
        },
        src: 'dist/<%= pkg.name %>.css'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      dist: [
        'dist/<%= pkg.name %>.css'
      ],
    },

    cssmin: {
      options: {
        // TODO: disable `zeroUnits` optimization once clean-css 3.2 is released
        //    and then simplify the fix for https://github.com/twbs/bootstrap/issues/14837 accordingly
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
      },
      minify: {
        src: 'dist/<%= pkg.name %>.css',
        dest: 'dist/<%= pkg.name %>.min.css'
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/*.css'
      }
    },

    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      dist: {
        expand: true,
        cwd: 'dist/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/'
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    watch: {
      files: 'less/**/*.less',
      tasks: 'less'
    },

    exec: {
      npmUpdate: {
        command: 'npm update'
      }
    },

  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // CSS distribution task.
  grunt.registerTask('less-compile', ['less:compile']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:all', 'usebanner', 'csscomb:dist', 'cssmin:minify']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css']);

  // Default task.
  grunt.registerTask('default', ['clean:dist']);

};
