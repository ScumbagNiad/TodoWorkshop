gulp.task('default', ['clean'], function () {
	gulp.start('styles', 'webpack', 'images', 'jade', 'copy', 'watch');
});