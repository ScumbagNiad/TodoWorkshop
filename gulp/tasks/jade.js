var jade = require('gulp-jade');

gulp.task('jade', function() {
	gulp.src([path.src + '/jade/**/index.jade'])
		.pipe(jade({
			locals: {
				assets: {
					css: '/assets/css',
					js: '/assets/js',
					images: '/assets/images'
				}
			}
		}))
		.on('error', onError)
		.pipe(gulp.dest(path.dest));
});