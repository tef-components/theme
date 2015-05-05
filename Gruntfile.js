module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      default: {
        files: {
          'css/tc-components.css': 'less/theme.less'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        src: 'css/*.css'
      },
    },

    concat: {
      default: {
       src: [
          '../icons/fonts/icons.css',
          'css/tc-components.css',
        ],
        dest: 'css/tc-components.css'
      }
    },
    
    copy: {
      eot: {
        src: '../icons/fonts/icons.eot',
        dest: 'css/icons.eot',
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/tc-components.min.css': 'css/tc-components.css',
        }
      }
    },

    // reformating  variables.less to create a core-styles compliant file
    // to be used in Web components
    replace: {
      preless: {
        options: {
          patterns: [
            { match: '    @', replacement: '.CoreStyle-' },
            { match: ': ', replacement: ' { fake-property: ' },
            { match: ';', replacement: '; }' }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true, flatten: true,
            src: ['less/variables.less'], dest: 'templates/'
          }
        ]
      },

      import: {
        options: {
          patterns: [
            {
              match: '// Variables',
              replacement: '@import "../less/variables.less";'
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true, flatten: true,
            src: ['templates/variables.less'], dest: 'templates/'
          }
        ]
      },

      final: {
        options: {
          patterns: [
            { match: '.CoreStyle-', replacement: 'CoreStyle.g.' },
            { match: '{', replacement: '=' },
            { match: 'fake-property: ', replacement: '"' },
            { match: ';', replacement: '";' },
            { match: '}', replacement: '' },
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true, flatten: true,
            src: ['templates/variables.css'], dest: 'templates/'
          }
        ]
      }
    },

    // create theme*.js to to be used in Web Components
    includes: {
      files: {
        cwd: 'templates/',
        src: '**/*.js',
        dest: ''
      }
    },

    bump: {
      // upgrade release and push to master
      options : {
        files: ['bower.json'],
        commitFiles: ["-a"],
        pushTo: 'origin'
      }
    },

    exec: {
      // add new files before commiting
      add: {
        command: 'git add -A'
      },

      // push to gh-pages branch
      pages: {
        command: [
          'git checkout gh-pages',
          'git pull origin master',
          'git push origin gh-pages',
          'git checkout master'
        ].join('&&')
      },

      // adds prompted commit message
      message: {
        command: function() {
          var message = grunt.config('gitmessage');
          return "git commit -am '" + message + "'";
        }
      }
    },

    prompt: {
      commit: {
        options: {
          questions: [
            {
              config: 'gitmessage',
              type: 'input',
              message: 'Commit Message'
            }
          ]
        }
      }
    },

    watch: {
      styles: {
        files: ['../**/less/*.less'],
        tasks: ['less', 'concat'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'less',
    'concat',
    'watch'
  ]);

  grunt.registerTask('webcomponents', [
    'replace:preless',
    'replace:import',
    'less',
    'replace:final',
    'autoprefixer',
    'concat',
    'cssmin',
    'includes'
  ]);

  grunt.registerTask('release', [
    'copy',
    'replace:preless',
    'replace:import',
    'less',
    'replace:final',
    'autoprefixer',
    'concat',
    'cssmin',
    'includes',
    'exec:add',
    'prompt',
    'exec:message',
    'bump',
    'exec:pages'
  ]);
};
