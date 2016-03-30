gulp.task('copy', function() {
	gulp.src([path.src + '/*/', path.src + '/*/.*', '!' + path.src + '/assets/**/', '!' + path.src + '/jade/', '!' + path.src + '/jade/**/'])
		.pipe(gulp.dest(path.dest));

	gulp.src([path.src + '/assets/json/**/*'])
		.pipe(gulp.dest(path.dest + '/assets/json/'));

	return gulp.src([path.src + '/assets/fonts/**/*'])
		.pipe(gulp.dest(path.dest + '/assets/fonts/'));
});