module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			server : {
				options: {
					port: 9000,
					hostname: 'localhost',
					livereload: true,
					open: true
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['scss/*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['js/*.js']
			},
			html: {
				files: ['*.html']
			}
		},
		sass: {
			dist: {
				options: {
					compass: true
				},
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['connect', 'watch', 'sass']);
};
