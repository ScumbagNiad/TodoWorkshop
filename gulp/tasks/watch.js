gulp.task('watch', function() {
	// livereload.listen();
	browserSync.init({
		proxy: 'localhost:3000',
        port: 5000
	});

    // Watch template files
    gulp.watch([path.src + '/**/*.jade'], ['jade']).on('change', browserSync.reload);

    // Watch styles files
    gulp.watch(path.src + '/assets/styles/**/*', ['styles']);

    // Watch scripts files
    gulp.watch([path.src + '/assets/scripts/**/*.*', path.src + '/assets/**/*.json'], ['webpack']);

    // Watch images files
    gulp.watch(path.src + '/assets/images/**/*', ['images']);
});