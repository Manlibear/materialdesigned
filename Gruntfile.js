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
            src: {
                src: ['src/**/*.js']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.css': 'css/src/main.scss',

                    //themes
                    'css/themes/indigo.css': 'css/themes/src/indigo.scss'
                }
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>\n',
                stripBanners: true
            },
            dist: {
                src: ['src/simple-sidebar.js'],
                dest: 'dist/jquery.<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>\n'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.min.js'
            }
        },

        watch: {
            js: {
                files: ['src/simple-sidebar.js'],
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

    // Default task.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
