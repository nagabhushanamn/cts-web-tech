module.exports = function (grunt) {

    // tasks
    // grunt.registerTask('task1', function () {
    //     console.log('executing task1..');
    // });
    // grunt.registerTask('task2', function () {
    //     console.log('executing task2..');
    // });

    // grunt.registerTask('default', ['task1', 'task2']);

    //--------------------------------------------------

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat', 'uglify'],
            },
        },
        concat: {
            js: {
                src: ['js/mod1.js', 'js/mod2.js', 'app.js'],
                dest: 'dist/built.js',
            },
            css: {
                src: ['css/*.css'],
                dest: 'dist/built.css',
            },
        },
        uglify: {
            js: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            },
        }
    });


    grunt.registerTask('default', ['concat', 'uglify', 'watch']);


}