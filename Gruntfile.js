module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                '** <%= pkg.author %>\n' +
                '** (c) 2014-<%= grunt.template.today("yyyy") %> Licensed under <%= pkg.license %>\n' +
                '*/',

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            js: {
                src: ['js/src/*.js']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/materialdesigned-style.css': 'css/sass/main.scss',

                    // Tests
                    'css/test/common.css': 'css/test/sass/common.scss',
                    'css/test/toolbars.css': 'css/test/sass/toolbars.scss',
                    'css/test/sidenav.css': 'css/test/sass/sidenav.scss'
                }
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>\n',
                stripBanners: true
            },
            dist: {
                src: [
                    'bower_components/simpler-sidebar/dist/jquery.simpler-sidebar.min.js',
                    'js/src/iframeheightfix.js',
                    'js/src/fixmainwrapper.js',
                    'js/src/searchmodule.js',
                    'js/src/documentready.js'
                ],
                dest: 'js/materialdesigned-template.js'
            }
        },

        uglify: {
            options: {
                preserveComments: 'some'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'js/materialdesigned-template.min.js'
            }
        },

        watch: {
            js: {
                files: ['js/src/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            css: {
                files: '**/*.scss',
				tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task.
    grunt.registerTask('default', ['sass', 'jshint', 'concat', 'uglify']);
};
