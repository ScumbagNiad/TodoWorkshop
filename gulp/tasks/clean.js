var gulp = require('gulp'),
	del = require('del');

gulp.task('clean', function(cb) {
	del([path.dest + '/**/*', '!' + path.dest + '/.*', '!' + path.dest + '/README.md']).then(paths => {
		cb();
	});
});