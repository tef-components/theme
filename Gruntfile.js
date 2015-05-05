module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      default: {
        files: {
          'css/components.css': 'less/theme.less',
          'templates/variables.css': 'templates/variables.less',
          'css/components/buttons.css': 'less/buttons.less',
          'css/components/dropdowns.css': 'less/dropdowns.less',
          'css/components/inputs.css': 'less/inputs.less',
          'css/components/radios.css': 'less/radios.less',
          'css/components/checkboxes.css': 'less/checkboxes.less',
          'css/components/modals.css': 'less/modals.less',
          'css/components/headers.css': 'less/headers.less',
          'css/components/sidebars.css': 'less/sidebars.less',
          'css/components/tabs.css': 'less/tabs.less',
          'css/components/toolbars.css': 'less/toolbars.less',
          'css/components/tables.css': 'less/tables.less',
          'css/components/tooltips.css': 'less/tooltips.less',
          'css/components/lists.css': 'less/lists.less'
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
          'css/components.css',
        ],
        dest: 'css/components.css'
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
          'css/components.min.css': 'css/components.css',
          'css/components/buttons.min.css': 'css/components/buttons.css',
          'css/components/dropdowns.min.css': 'css/components/dropdowns.css',
          'css/components/inputs.min.css': 'css/components/inputs.css',
          'css/components/radios.min.css': 'css/components/radios.css',
          'css/components/checkboxes.min.css': 'css/components/checkboxes.css',
          'css/components/modals.min.css': 'css/components/modals.css',
          'css/components/headers.min.css': 'css/components/headers.css',
          'css/components/sidebars.min.css': 'css/components/sidebars.css',
          'css/components/tabs.min.css': 'css/components/tabs.css',
          'css/components/toolbars.min.css': 'css/components/toolbars.css',
          'css/components/tables.min.css': 'css/components/tables.css',
          'css/components/tooltips.min.css': 'css/components/tooltips.css',
          'css/components/lists.min.css': 'css/components/lists.css'
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
